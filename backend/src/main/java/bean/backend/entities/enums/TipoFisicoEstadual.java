package bean.backend.entities.enums;

public enum TipoFisicoEstadual {
    CONTRIBUINTE(1),
    NAO_CONTRIBUINTE(2),
    INSENTO(3);

    private int code;

    private TipoFisicoEstadual(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public static TipoFisicoEstadual valueOf(int code) {
        for (TipoFisicoEstadual value : TipoFisicoEstadual.values()) {
            if (value.getCode() == code) {
                return value;
            }
        }
        throw new IllegalArgumentException("Código de tipo inscrição estadual inválido.");
    }
}