/* Arquivo gerado utilizando VICGERADOR por munif as 14/03/2018 06:35:02 */
 /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
package br.com.munif.openprojects.vicentebase.service;

import br.com.munif.framework.vicente.application.BaseService;
import br.com.munif.framework.vicente.application.VicRepository;
import br.com.munif.openprojects.vicentebase.domain.Movimento;
import org.springframework.stereotype.Service;

/**
 *
 * @author GeradorVicente
 */
@Service
public class MovimentoService extends BaseService<Movimento> {

    public MovimentoService(VicRepository<Movimento> repository) {
        super(repository);
    }

}
