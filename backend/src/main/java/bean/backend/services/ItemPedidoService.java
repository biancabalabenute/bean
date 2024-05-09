package bean.backend.services;

import bean.backend.entities.ItemPedido;
import bean.backend.entities.pk.ItemPedidoPK;
import bean.backend.repository.ItemPedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemPedidoService {

    @Autowired
    private ItemPedidoRepository itemPedidoRepository;

    public void deletarItemPedidoPorIdVenda(String idVendaPlataforma) {
        itemPedidoRepository.deleteByIdVendaPlataforma(idVendaPlataforma);
    }
}
