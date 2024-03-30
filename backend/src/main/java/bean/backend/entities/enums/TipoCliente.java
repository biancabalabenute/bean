package bean.backend.entities.enums;

public enum TipoCliente {
    PESSOA_FISICA(1),
    PESSOA_JURIDICA(2);

    private int code;

    private TipoCliente(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public static TipoCliente valueOf(int code) {
        for (TipoCliente value : TipoCliente.values()) {
            if (value.getCode() == code) {
                return value;
            }
        }
        throw new IllegalArgumentException("Código de tipo cliente inválido.");
    }
}
