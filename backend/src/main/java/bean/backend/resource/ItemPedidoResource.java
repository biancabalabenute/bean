package bean.backend.resource;

import bean.backend.entities.Fornecedor;
import bean.backend.entities.ItemPedido;
import bean.backend.entities.Marca;
import bean.backend.services.FornecedorService;
import bean.backend.services.ItemPedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
