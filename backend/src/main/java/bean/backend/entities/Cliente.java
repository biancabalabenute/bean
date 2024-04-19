package bean.backend.entities;

import bean.backend.entities.enums.TipoCliente;
import bean.backend.entities.enums.TipoFisicoEstadual;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;
import java.util.*;

@Entity
@Table(name = "tb_cliente")
public class Cliente implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String cpfOuCnpj;

    private Integer tipo;
    private Integer tipoFisicoEstadual;
    private String inscricaoEstadual;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'", timezone = "GMT")
    private Instant dataCadastro;

    @OneToMany(mappedBy = "cliente")
    private List<Endereco> enderecos = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "cliente")
    private List<Pedido> pedidos = new ArrayList<>();

    public Cliente() {
    }

    public Cliente(Long id, String name, String cpfOuCnpj, Instant dataCadastro, String inscricaoEstadual, TipoCliente tipo, TipoFisicoEstadual tipoFisicoEstadual) {
        this.id = id;
        this.name = name;
        this.cpfOuCnpj = cpfOuCnpj;
        this.dataCadastro = dataCadastro;
        this.inscricaoEstadual = inscricaoEstadual;
        setTipo(tipo);
        setTipoFisicoEstadual(tipoFisicoEstadual);
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

    public String getCpfOuCnpj() {
        return cpfOuCnpj;
    }

    public void setCpfOuCnpj(String cpfOuCnpj) {
        this.cpfOuCnpj = cpfOuCnpj;
    }

    public Instant getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Instant dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public String getInscricaoEstadual() {
        return inscricaoEstadual;
    }

    public void setInscricaoEstadual(String inscricaoEstadual) {
        this.inscricaoEstadual = inscricaoEstadual;
    }

    public TipoCliente getTipo() {
        return TipoCliente.valueOf(tipo);
    }

    public void setTipo(TipoCliente tipo) {
        if (tipo != null) {
            this.tipo = tipo.getCode();
        }
    }

    public void setTipoFisicoEstadual(TipoFisicoEstadual tipoFisicoEstadual) {
        if (tipoFisicoEstadual != null) {
            this.tipoFisicoEstadual = tipoFisicoEstadual.getCode();
        }
    }

    public List<Endereco> getEnderecos() {
        return enderecos;
    }

    public void setEnderecos(List<Endereco> enderecos) {
        this.enderecos = enderecos;
    }

    public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cliente Cliente = (Cliente) o;
        return Objects.equals(cpfOuCnpj, Cliente.cpfOuCnpj);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cpfOuCnpj);
    }
}