/* Arquivo gerado utilizando VICGERADOR por munif as 14/03/2018 06:35:02 */
 /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
package br.com.munif.openprojects.vicentebase.api;

import br.com.munif.framework.vicente.api.BaseAPI;
import br.com.munif.framework.vicente.application.BaseService;
import br.com.munif.openprojects.vicentebase.domain.ItemMovimento;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.log4j.Logger;

/**
 *
 * @author GeradorVicente
 */
@RestController
@RequestMapping("/api/itemmovimento")
public class ItemMovimentoApi extends BaseAPI<ItemMovimento> {

    private final Logger log = Logger.getLogger(ItemMovimentoApi.class);

    private static final String ENTITY_NAME = "itemmovimento";

    public ItemMovimentoApi(BaseService<ItemMovimento> service) {
        super(service);
    }

}