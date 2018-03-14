package br.com.munif.openprojects.vicentebase.bootstrap;

import br.com.munif.framework.vicente.core.RightsHelper;
import br.com.munif.framework.vicente.core.VicThreadScope;
import br.com.munif.framework.vicente.security.seed.SeedSecurity;
import br.com.munif.openprojects.vicentebase.domain.Categoria;
import br.com.munif.openprojects.vicentebase.domain.Cliente;
import br.com.munif.openprojects.vicentebase.domain.ItemMovimento;
import br.com.munif.openprojects.vicentebase.domain.Movimento;
import br.com.munif.openprojects.vicentebase.domain.Produto;
import br.com.munif.openprojects.vicentebase.domain.localizacao.Pais;
import br.com.munif.openprojects.vicentebase.repository.CategoriaRepository;
import br.com.munif.openprojects.vicentebase.repository.ClienteRepository;
import br.com.munif.openprojects.vicentebase.repository.ItemMovimentoRepository;
import br.com.munif.openprojects.vicentebase.repository.MovimentoRepository;
import br.com.munif.openprojects.vicentebase.repository.PaisRepository;
import br.com.munif.openprojects.vicentebase.repository.ProdutoRepository;
import java.math.BigDecimal;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
import java.time.temporal.TemporalAmount;
import java.time.temporal.TemporalUnit;
import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class Seed implements ApplicationListener<ContextRefreshedEvent> {

    private Logger log = Logger.getLogger(Seed.class);

    @Autowired
    private SeedSecurity seedSecurity;

    @Autowired
    private PaisRepository paisRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ItemMovimentoRepository itemMovimentoRepository;

    @Autowired
    private MovimentoRepository movimentoRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        VicThreadScope.gi.set("SEED");
        VicThreadScope.ui.set("SEED");
        VicThreadScope.oi.set("SEED.");
        VicThreadScope.ip.set("127.0.0.1");
        VicThreadScope.defaultRights.set(RightsHelper.OWNER_ALL + RightsHelper.GROUP_READ_UPDATE + RightsHelper.OTHER_READ);
        log.info("Start");

        seedEstoque();

        if (paisRepository.count() > 0) {
            return;
        }
        seedSecurity.seedSecurity();
        seedLocalizacao();
    }

    public void seedLocalizacao() {
        if (paisRepository.count() > 0) {
            return;
        }
        log.info("Inserting data");

        String[] paises = DadosEstaticos.paises;
        for (String p : paises) {
            paisRepository.saveAndFlush(new Pais(p.trim()));
        }

    }

    private void seedEstoque() {
        Categoria comida = categoriaRepository.saveAndFlush(new Categoria("Comidas"));
        Categoria bebida = categoriaRepository.saveAndFlush(new Categoria("Bebidas"));
        Categoria tempero = categoriaRepository.saveAndFlush(new Categoria("Temperos"));

        Produto coca = produtoRepository.saveAndFlush(new Produto("Coca cola", bebida, 10));
        Produto fanta = produtoRepository.saveAndFlush(new Produto("Fanta", bebida, 10));
        Produto guarana = produtoRepository.saveAndFlush(new Produto("Guaraná", bebida, 10));

        Produto arroz = produtoRepository.saveAndFlush(new Produto("Arroz", comida, 10));
        Produto feijao = produtoRepository.saveAndFlush(new Produto("Feijao", comida, 10));
        Produto carne = produtoRepository.saveAndFlush(new Produto("Carne", comida, 10));

        Cliente munif = clienteRepository.saveAndFlush(new Cliente("Munif"));
        Cliente vicente = clienteRepository.saveAndFlush(new Cliente("Vicente"));
        Cliente duda = clienteRepository.saveAndFlush(new Cliente("Duda"));

        Movimento movimento = movimentoRepository.saveAndFlush(new Movimento(munif));

        itemMovimentoRepository.saveAndFlush(new ItemMovimento(BigDecimal.ONE, 1, movimento, arroz));
        itemMovimentoRepository.saveAndFlush(new ItemMovimento(BigDecimal.TEN, 3, movimento, carne));
        itemMovimentoRepository.saveAndFlush(new ItemMovimento(BigDecimal.ONE, 2, movimento, fanta));

    }

}
