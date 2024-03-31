package bean.backend.resource.exeptions;

import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;

public class StandardError implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Instant DataHora;
    private Integer status;
    private String erro;
    private String mensagem;
    private String caminho;

    public StandardError() {
    }

    public StandardError(Instant dataHora, Integer status, String erro, String mensagem, String caminho) {
        DataHora = dataHora;
        this.status = status;
        this.erro = erro;
        this.mensagem = mensagem;
        this.caminho = caminho;
    }

    public Instant getDataHora() {
        return DataHora;
    }

    public void setDataHora(Instant dataHora) {
        DataHora = dataHora;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getErro() {
        return erro;
    }

    public void setErro(String erro) {
        this.erro = erro;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public String getCaminho() {
        return caminho;
    }

    public void setCaminho(String caminho) {
        this.caminho = caminho;
    }
}
