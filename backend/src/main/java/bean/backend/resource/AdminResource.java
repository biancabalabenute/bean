package bean.backend.resource;

import bean.backend.entities.Admin;
import bean.backend.entities.Cliente;
import bean.backend.services.AdminService;
import bean.backend.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/admin")
public class AdminResource {

    @Autowired
    private AdminService service;

    @GetMapping
    public ResponseEntity<List<Admin>> findAll() {
        List<Admin> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Admin> findById(@PathVariable Long id) {
        Admin obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Admin> insert(@RequestBody Admin obj) {
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
    public ResponseEntity<Admin> update(@PathVariable Long id, @RequestBody Admin obj) {
        obj = service.update(id, obj);
        return ResponseEntity.ok().body(obj);
    }
}
