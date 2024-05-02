package bean.backend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "tb_produto")
public class Produto implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double precoUnitario;
    private String descricao;
    private String modelo;
    private String codigoDeBarras;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "GMT")
    private LocalDate data;
    private Integer quantidade;

    @ManyToMany
    @JoinTable(name = "tb_produto_fornecedor", joinColumns = @JoinColumn(name = "produto_id"), inverseJoinColumns = @JoinColumn(name = "fornecedor_id"))
    private Set<Fornecedor> fornecedor = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "tb_produto_categoria", joinColumns = @JoinColumn(name = "produto_id"), inverseJoinColumns = @JoinColumn(name = "categoria_id"))
    private Set<Categoria> categorias = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "tb_produto_marca", joinColumns = @JoinColumn(name = "produto_id"), inverseJoinColumns = @JoinColumn(name = "marca_id"))
    private Set<Marca> marcas = new HashSet<>();

    @OneToMany(mappedBy = "id.produto")
    private Set<ItemPedido> itens = new HashSet<>();

    public Produto() {
    }

    public Produto(Long id, String name, Double precoUnitario, String descricao, String modelo, String codigoDeBarras, LocalDate data, Integer quantidade) {
        this.id = id;
        this.name = name;
        this.precoUnitario = precoUnitario;
        this.descricao = descricao;
        this.modelo = modelo;
        this.codigoDeBarras = codigoDeBarras;
        this.data = data;
        this.quantidade = quantidade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrecoUnitario() {
        return precoUnitario;
    }

    public void setPrecoUnitario(Double precoUnitario) {
        this.precoUnitario = precoUnitario;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getCodigoDeBarras() {
        return codigoDeBarras;
    }

    public void setCodigoDeBarras(String codigoDeBarras) {
        this.codigoDeBarras = codigoDeBarras;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Set<Categoria> getCategorias() {
        return categorias;
    }

    public Set<Marca> getMarcas() {
        return marcas;
    }

    public Set<Fornecedor> getFornecedor() {
        return fornecedor;
    }

    @JsonIgnore
    public Set<Pedido> getPedidos() {
        Set<Pedido> set = new HashSet<>();
        for (ItemPedido x : itens) {
            set.add(x.getPedido());
        }
        return set;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Produto produto = (Produto) o;
        return Objects.equals(id, produto.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
