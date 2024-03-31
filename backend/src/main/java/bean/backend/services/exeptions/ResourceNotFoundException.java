package bean.backend.services.exeptions;

public class ResourceNotFoundException extends RuntimeException {
    public static final long serialVersionUID = 1L;

    public ResourceNotFoundException(Object id) {
        super("Não encontrado. Id " + id);
    }
}
