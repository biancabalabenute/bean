package bean.backend.config;

import bean.backend.entities.*;
import bean.backend.entities.enums.TipoCliente;
import bean.backend.repository.*;
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

    @Autowired
    private ItemPedidoRepository itemPedidoRepository;

    @Autowired
    private EstadoRepository estadoRepository;

    @Autowired
    private CidadeRepository cidadeRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private TransportadoraRepository transportadoraRepository;

    @Autowired
    private TelefoneRepository telefoneRepository;

    @Autowired
    private MarcaRepository marcaRepository;

    @Override
    public void run(String... args) throws Exception {

        Categoria cat1 = new Categoria(null, "Smartphone");
        Categoria cat2 = new Categoria(null, "Televisão");
        Categoria cat3 = new Categoria(null, "Tablets");

        Marca mar1 = new Marca(null, "Samsung");
        Marca mar2 = new Marca(null, "Motorola");
        Marca mar3 = new Marca(null, "Apple");

        Produto pro1 = new Produto(null, "TV 4K", 2190.0, "TV Samsung Preta");
        Produto pro2 = new Produto(null, "Celular Motorola", 2300.0, "Celular com camera boa");
        Produto pro3 = new Produto(null, "Ipdad", 1250.0, "Tablet da apple");
        Produto pro4 = new Produto(null, "Tablet rosa", 1200.0, "Tablet que é da cor rosa");
        Produto pro5 = new Produto(null, "TV de tubo", 100.99, "TV das antigas");

        categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat3));
        marcaRepository.saveAll(Arrays.asList(mar1, mar2, mar3));
        produtoRepository.saveAll(Arrays.asList(pro1, pro2, pro3, pro4, pro5));

        pro1.getCategorias().add(cat2);
        pro2.getCategorias().add(cat1);
        pro3.getCategorias().add(cat3);
        pro4.getCategorias().add(cat3);
        pro5.getCategorias().add(cat2);

        pro1.getMarcas().add(mar1);
        pro2.getMarcas().add(mar2);
        pro3.getMarcas().add(mar3);
        pro4.getMarcas().add(mar1);
        pro5.getMarcas().add(mar2);

        produtoRepository.saveAll(Arrays.asList(pro1, pro2, pro3, pro4, pro5));

        Cliente c1 = new Cliente(null, "José", "jose@gmail.com", "123456789", Instant.parse("2023-03-20T17:53:07Z"), TipoCliente.PESSOA_FISICA);
        Cliente c2 = new Cliente(null, "Maria", "maria@gmail.com", "987654321", Instant.parse("2023-04-10T19:53:07Z"), TipoCliente.PESSOA_FISICA);

        Pedido p1 = new Pedido(null, Instant.parse("2023-06-20T19:53:07Z"), c1);
        Pedido p2 = new Pedido(null, Instant.parse("2023-07-21T03:42:10Z"), c2);
        Pedido p3 = new Pedido(null, Instant.parse("2023-02-22T15:21:22Z"), c1);

        clienteRepository.saveAll(Arrays.asList(c1, c2));
        pedidoRepository.saveAll(Arrays.asList(p1, p2, p3));

        ItemPedido oi1 = new ItemPedido(p1, pro1, 2, pro1.getPreco());
        ItemPedido oi2 = new ItemPedido(p1, pro3, 1, pro3.getPreco());
        ItemPedido oi3 = new ItemPedido(p2, pro3, 2, pro3.getPreco());
        ItemPedido oi4 = new ItemPedido(p3, pro5, 2, pro5.getPreco());

        itemPedidoRepository.saveAll(Arrays.asList(oi1, oi2, oi3, oi4));

        Pagamento pag1 = new Pagamento(null, Instant.parse("2023-06-20T21:53:07Z"), p1);
        p1.setPagamento(pag1);

        pedidoRepository.save(p1);

        Estado est1 = new Estado(null, "São Paulo");
        Estado est2 = new Estado(null, "Mato Grosso do Sul");

        Cidade cd1 = new Cidade(null, "Campinas", est1);
        Cidade cd2 = new Cidade(null, "Campo Grande", est2);
        Cidade cd3 = new Cidade(null, "Ponta Porã", est2);

        est1.getCidades().addAll(Arrays.asList(cd1));
        est2.getCidades().addAll(Arrays.asList(cd2, cd3));

        estadoRepository.saveAll(Arrays.asList(est1, est2));
        cidadeRepository.saveAll(Arrays.asList(cd1, cd2, cd3));

        Transportadora t1 = new Transportadora(null, "Correios");

        transportadoraRepository.saveAll(Arrays.asList(t1));

        Endereco e1 = new Endereco(null, "Rua Flores", "300", "Casa", "Jardim", "38220834", c2, cd2);
        Endereco e2 = new Endereco(null, "Rua Da Floresta", "120", "Casa de madeira", "Centro", "123123", c1, cd3);
        Endereco e3 = new Endereco(null, "Rua Do Centro", "1000", "Predio amarelo", "Centro", "123456", t1, cd2);

        c1.getEnderecos().addAll(Arrays.asList(e2));
        c2.getEnderecos().addAll(Arrays.asList(e1));
        t1.getEnderecos().addAll(Arrays.asList(e3));
        enderecoRepository.saveAll(Arrays.asList(e1, e2, e3));


        //PARA QUANDO CRIAR O CONTEXTO DE FORNECEDOR
        Telefone tel1 = new Telefone(null, "6799111222");
        Telefone tel2 = new Telefone(null, "1699111222");

        telefoneRepository.saveAll(Arrays.asList(tel1, tel2));
    }
}
