package bean.backend.resource;

import bean.backend.entities.Cliente;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteResource {

    @GetMapping
    public ResponseEntity<Cliente> findAll() {
        Cliente c = new Cliente(1L, "José", "jose@gmail.com", "123456789");
        return ResponseEntity.ok().body(c);
    }
}
