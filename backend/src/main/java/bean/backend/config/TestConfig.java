package bean.backend.config;

import bean.backend.entities.Cliente;
import bean.backend.entities.Pedido;
import bean.backend.entities.enums.TipoCliente;
import bean.backend.repository.ClienteRepository;
import bean.backend.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.time.Instant;
import java.util.Arrays;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private PedidoRepository pedidoRepository;


    @Override
    public void run(String... args) throws Exception {
        Cliente c1 = new Cliente(null, "José", "jose@gmail.com", "123456789", TipoCliente.PESSOA_FISICA);
        Cliente c2 = new Cliente(null, "Maria", "maria@gmail.com", "987654321", TipoCliente.PESSOA_FISICA);

        Pedido p1 = new Pedido(null, Instant.parse("2023-06-20T19:53:07Z"), c1);
        Pedido p2 = new Pedido(null, Instant.parse("2023-07-21T03:42:10Z"), c2);
        Pedido p3 = new Pedido(null, Instant.parse("2023-02-22T15:21:22Z"), c1);

        clienteRepository.saveAll(Arrays.asList(c1, c2));
        pedidoRepository.saveAll(Arrays.asList(p1, p2, p3));
    }
}
