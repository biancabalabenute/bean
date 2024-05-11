package bean.backend.services;

import bean.backend.repository.ItemPedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemPedidoService {

    @Autowired
    private ItemPedidoRepository itemPedidoRepository;

    public void deletarItemPedidoPorIdVenda(String idVendaPlataforma) {
        itemPedidoRepository.deleteByIdVendaPlataforma(idVendaPlataforma);
    }
}
