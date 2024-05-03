package bean.backend.resource;

import bean.backend.services.ItemPedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/item-pedido")
public class ItemPedidoResource {

    @Autowired
    private ItemPedidoService itemPedidoService;
    @DeleteMapping("/venda/{idVendaPlataforma}")
    public ResponseEntity<Void> deletarItemPedidoPorIdVenda(@PathVariable String idVendaPlataforma) {
        itemPedidoService.deletarItemPedidoPorIdVenda(idVendaPlataforma);
        return ResponseEntity.noContent().build();
    }
}
