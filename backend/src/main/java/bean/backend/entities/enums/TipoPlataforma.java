package bean.backend.entities.enums;

public enum TipoPlataforma {
    MERCADO_LIVRE(1),
    SHOPEE(2);

    private int code;

    private TipoPlataforma(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public static TipoPlataforma valueOf(int code) {
        for (TipoPlataforma value : TipoPlataforma.values()) {
            if (value.getCode() == code) {
                return value;
            }
        }
        throw new IllegalArgumentException("Código de tipo plataforma inválido.");
    }
}