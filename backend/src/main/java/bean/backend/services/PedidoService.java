package bean.backend.services;

import bean.backend.entities.Pedido;
import bean.backend.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository repository;

    public List<Pedido> findAll() {
        return repository.findAll();
    }

    public Pedido findById(Long id) {
        Optional<Pedido> obj = repository.findById(id);
        return obj.get();
    }

    public List<Pedido> buscarVendasPorPeriodo(Instant dataInicial, Instant dataFinal) {
        List<Pedido> todosPedidos = repository.findAll();
        return Pedido.buscarVendasPorPeriodo(todosPedidos, dataInicial, dataFinal);
    }
}
