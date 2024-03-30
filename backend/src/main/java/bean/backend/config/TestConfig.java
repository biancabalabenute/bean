package bean.backend.config;

import bean.backend.entities.Categoria;
import bean.backend.entities.Cliente;
import bean.backend.entities.Pedido;
import bean.backend.entities.Produto;
import bean.backend.entities.enums.TipoCliente;
import bean.backend.repository.CategoriaRepository;
import bean.backend.repository.ClienteRepository;
import bean.backend.repository.PedidoRepository;
import bean.backend.repository.ProdutoRepository;
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

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private ProdutoRepository produtoRepository;


    @Override
    public void run(String... args) throws Exception {

        Categoria cat1 = new Categoria(null, "Eletronicos");
        Categoria cat2 = new Categoria(null, "Livros");
        Categoria cat3 = new Categoria(null, "Computadores");

        Produto pro1 = new Produto(null, "Senhor dos aneis", 90.5, "Livro com capa dura");
        Produto pro2 = new Produto(null, "Smart TV", 2190.0, "TV preta smart.");
        Produto pro3 = new Produto(null, "Macbook Pro", 1250.0, "PC da apple");
        Produto pro4 = new Produto(null, "PC Gamer", 1200.0, "Pc gamer que roda em 4k com led");
        Produto pro5 = new Produto(null, "Diario de um banana", 100.99, "Primeiro livro");

        categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat3));
        produtoRepository.saveAll(Arrays.asList(pro1, pro2, pro3, pro4, pro5));

        pro1.getCategorias().add(cat2);
        pro2.getCategorias().add(cat1);
        pro2.getCategorias().add(cat3);
        pro3.getCategorias().add(cat3);
        pro4.getCategorias().add(cat3);
        pro5.getCategorias().add(cat2);

        produtoRepository.saveAll(Arrays.asList(pro1, pro2, pro3, pro4, pro5));


        Cliente c1 = new Cliente(null, "José", "jose@gmail.com", "123456789", TipoCliente.PESSOA_FISICA);
        Cliente c2 = new Cliente(null, "Maria", "maria@gmail.com", "987654321", TipoCliente.PESSOA_FISICA);

        Pedido p1 = new Pedido(null, Instant.parse("2023-06-20T19:53:07Z"), c1);
        Pedido p2 = new Pedido(null, Instant.parse("2023-07-21T03:42:10Z"), c2);
        Pedido p3 = new Pedido(null, Instant.parse("2023-02-22T15:21:22Z"), c1);

        clienteRepository.saveAll(Arrays.asList(c1, c2));
        pedidoRepository.saveAll(Arrays.asList(p1, p2, p3));
    }
}
