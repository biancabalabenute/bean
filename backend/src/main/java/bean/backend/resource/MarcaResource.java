package bean.backend.resource;

import bean.backend.entities.Marca;
import bean.backend.services.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/marcas")
public class MarcaResource {

    @Autowired
    private MarcaService service;

    @GetMapping
    public ResponseEntity<List<Marca>> findAll() {
        List<Marca> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Marca> findById(@PathVariable Long id) {
        Marca obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping(value = "/name/{name}")
    public ResponseEntity<Marca> findByName(@PathVariable String name) {
        Marca obj = service.findByName(name);
        return ResponseEntity.ok().body(obj);
    }


    @PostMapping
    public ResponseEntity<Marca> insert(@RequestBody Marca obj) {
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
    public ResponseEntity<Marca> update(@PathVariable Long id, @RequestBody Marca obj) {
        obj = service.update(id, obj);
        return ResponseEntity.ok().body(obj);
    }

}
