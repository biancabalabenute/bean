package bean.backend.entities;

import bean.backend.entities.enums.TipoPlataforma;
import bean.backend.entities.pk.ItemPedidoPK;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "tb_item_pedido")
public class ItemPedido implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private ItemPedidoPK id = new ItemPedidoPK();

    private Integer quantidade;
    private Double preco;


    private TipoPlataforma plataforma;


    private String idVendaPlataforma;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @Transient
    public Fornecedor getFornecedor() {
        return id.getProduto().getFornecedores().stream().findFirst().orElse(null);
    }

    public ItemPedido() {
    }

    public ItemPedido(Pedido pedido, Produto produto, Integer quantidade, Double preco, String idVendaPlataforma, TipoPlataforma plataforma, Cliente cliente) {
        id.setPedido(pedido);
        id.setProduto(produto);
        this.quantidade = quantidade;
        this.preco = preco;
        this.idVendaPlataforma = idVendaPlataforma;
        this.plataforma = plataforma;
        this.cliente = cliente;
    }

    @JsonIgnore
    public Pedido getPedido() {
        return id.getPedido();
    }

    public void setPedido(Pedido pedido) {
        id.setPedido(pedido);
    }

    public Produto getProduto() {
        return id.getProduto();
    }

    public void setProduto(Produto produto) {
        id.setProduto(produto);
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public Double getSubTotal() {
        return preco * quantidade;
    }

    public String getIdVendaPlataforma() {
        return idVendaPlataforma;
    }

    public void setIdVendaPlataforma(String idVendaPlataforma) {
        this.idVendaPlataforma = idVendaPlataforma;
    }

    public TipoPlataforma getPlataforma() {
        return plataforma;
    }

    public void setPlataforma(TipoPlataforma plataforma) {
        this.plataforma = plataforma;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItemPedido that = (ItemPedido) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
