package bean.backend.config;

import bean.backend.entities.Cliente;
import bean.backend.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private ClienteRepository clienteRepository;


    @Override
    public void run(String... args) throws Exception {
        Cliente c1 = new Cliente(null, "José", "jose@gmail.com", "123456789");
        Cliente c2 = new Cliente(null, "Maria", "maria@gmail.com", "987654321");

        clienteRepository.saveAll(Arrays.asList(c1, c2));
    }
}
