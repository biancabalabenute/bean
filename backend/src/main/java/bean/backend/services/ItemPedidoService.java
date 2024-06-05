package bean.backend.services;

import bean.backend.entities.ItemPedido;
import bean.backend.repository.ItemPedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemPedidoService {

    @Autowired
    private ItemPedidoRepository itemPedidoRepository;

    public List<ItemPedido> findAll() {
        return itemPedidoRepository.findAll();
    }

    public void deletarItemPedidoPorIdVenda(String idVendaPlataforma) {
        itemPedidoRepository.deleteByIdVendaPlataforma(idVendaPlataforma);
    }
}
