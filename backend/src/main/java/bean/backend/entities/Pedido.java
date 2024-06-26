package bean.backend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;
import java.util.*;

@Entity
@Table(name = "tb_pedido")
public class Pedido implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'", timezone = "GMT")
    private Instant instant;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Cliente cliente;

    @OneToMany(mappedBy = "id.pedido")
    private Set<ItemPedido> itens = new HashSet<>();

    public Pedido() {
    }

    public Pedido(Long id, Instant instant, Cliente cliente) {
        this.id = id;
        this.instant = instant;
        this.cliente = cliente;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getInstant() {
        return instant;
    }

    public void setInstant(Instant instant) {
        this.instant = instant;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Set<ItemPedido> getItens() {
        return itens;
    }

    public Double getTotal() {
        double soma = 0.0;
        for (ItemPedido x : itens) {
            soma += x.getSubTotal();
        }
        return soma;
    }

    public static List<Pedido> buscarVendasPorPeriodo(List<Pedido> pedidos, Instant dataInicial, Instant dataFinal) {
        List<Pedido> vendasPorPeriodo = new ArrayList<>();
        for (Pedido pedido : pedidos) {
            Instant dataPedido = pedido.getInstant();
            if (dataPedido.isAfter(dataInicial) && dataPedido.isBefore(dataFinal)) {
                vendasPorPeriodo.add(pedido);
            }
        }
        return vendasPorPeriodo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pedido pedido = (Pedido) o;
        return Objects.equals(id, pedido.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
