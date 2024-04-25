package bean.backend.resource;

import bean.backend.entities.Estoque;
import bean.backend.services.EstoqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/estoques")
public class EstoqueResource {

    @Autowired
    private EstoqueService service;

    @GetMapping
    public ResponseEntity<List<Estoque>> findAll() {
        List<Estoque> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Estoque> findById(@PathVariable Long id) {
        Estoque obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Estoque> insert(@RequestBody Estoque obj) {
        obj = service.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Estoque> update(@PathVariable Long id, @RequestBody Estoque obj) {
        obj = service.update(id, obj);
        return ResponseEntity.ok().body(obj);
    }
}
