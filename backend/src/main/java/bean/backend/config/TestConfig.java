package bean.backend.config;

import bean.backend.entities.*;
import bean.backend.entities.enums.TipoCliente;
import bean.backend.entities.enums.TipoFisicoEstadual;
import bean.backend.entities.enums.TipoPlataforma;
import bean.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.time.Instant;
import java.time.LocalDate;
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

    @Autowired
    private FornecedorRepository fornecedorRepository;

    @Override
    public void run(String... args) throws Exception {

        Categoria cat1 = new Categoria(null, "Smartphone");
        Categoria cat2 = new Categoria(null, "Televisão");
        Categoria cat3 = new Categoria(null, "Tablets");

        Marca mar1 = new Marca(null, "Samsung");
        Marca mar2 = new Marca(null, "Motorola");
        Marca mar3 = new Marca(null, "Apple");

        Produto pro1 = new Produto(null, "TV 4K", 2190.0, "TV Samsung Preta", "Modelo que funciona", "12312312312", LocalDate.parse("2023-06-20"), 1);
        Produto pro2 = new Produto(null, "Celular Motorola", 2300.0, "Celular com câmera boa", "Modelo XZ123", "45645645645", LocalDate.parse("2023-08-15"), 1);
        Produto pro3 = new Produto(null, "iPad", 1250.0, "Tablet da Apple", "Modelo Air", "78978978978", LocalDate.parse("2023-07-10"), 1);
        Produto pro4 = new Produto(null, "Tablet rosa", 1200.0, "Tablet que é da cor rosa", "Modelo Pink Edition", "98765432100", LocalDate.parse("2023-09-01"), 1);
        Produto pro5 = new Produto(null, "TV de tubo", 100.99, "TV das antigas", "Modelo Retro", "11223344556", LocalDate.parse("2023-05-05"), 1);


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

        Cliente c1 = new Cliente(null, "José", "123456789", Instant.parse("2023-03-20T17:53:07Z"), "8974233321", TipoCliente.PESSOA_FISICA, TipoFisicoEstadual.INSENTO);
        Cliente c2 = new Cliente(null, "Maria", "987654321", Instant.parse("2023-04-10T19:53:07Z"), "98989889898", TipoCliente.PESSOA_FISICA, TipoFisicoEstadual.INSENTO);

        Pedido p1 = new Pedido(null, Instant.parse("2023-06-20T19:53:07Z"), c1);
        Pedido p2 = new Pedido(null, Instant.parse("2023-07-21T03:42:10Z"), c2);
        Pedido p3 = new Pedido(null, Instant.parse("2023-02-22T15:21:22Z"), c1);

        clienteRepository.saveAll(Arrays.asList(c1, c2));
        pedidoRepository.saveAll(Arrays.asList(p1, p2, p3));

        ItemPedido oi1 = new ItemPedido(p1, pro1, 2, pro1.getPrecoUnitario(), "#2234", TipoPlataforma.MERCADO_LIVRE, c1);
        ItemPedido oi2 = new ItemPedido(p1, pro3, 1, pro3.getPrecoUnitario(), "#1234", TipoPlataforma.SHOPEE, c2);
        ItemPedido oi3 = new ItemPedido(p2, pro3, 2, pro3.getPrecoUnitario(), "#4546", TipoPlataforma.SHOPEE, c1);
        ItemPedido oi4 = new ItemPedido(p3, pro5, 2, pro5.getPrecoUnitario(), "#6678", TipoPlataforma.MERCADO_LIVRE, c2);

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

        Telefone tel1 = new Telefone(null, "6799111222");
        Telefone tel2 = new Telefone(null, "1699111222");
        telefoneRepository.saveAll(Arrays.asList(tel1, tel2));

        Fornecedor f1 = new Fornecedor(null, "Shopping China");
        Fornecedor f2 = new Fornecedor(null, "Shopping West Garden");

        tel1.setFornecedor(f1);
        tel2.setFornecedor(f2);

        f1.getTelefones().add(tel1);
        f2.getTelefones().add(tel2);

        fornecedorRepository.saveAll(Arrays.asList(f1, f2));
    }
}
