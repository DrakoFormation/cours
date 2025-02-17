import{aj as s,ak as a,al as e,aq as l}from"./app-Vi-0nYrY.js";const p={};function i(t,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="symfony-et-angular" tabindex="-1"><a class="header-anchor" href="#symfony-et-angular"><span>Symfony et Angular</span></a></h1><h2 id="automatiser-le-deploiement" tabindex="-1"><a class="header-anchor" href="#automatiser-le-deploiement"><span>Automatiser le déploiement</span></a></h2><p>Pour automatiser les déploiements, on se base en général sur Git et un repository distant (GitHub, GitLab, etc.) et on utilise des outils comme :</p><ul><li><a href="https://deployer.org/" target="_blank" rel="noopener noreferrer">Deployer, pour mettre en ligne, <em>via</em> SSH</a></li><li><a href="https://github.com/banago/PHPloy" target="_blank" rel="noopener noreferrer">PHPloy, pour mettre en ligne, <em>via</em> FTP</a>.</li></ul><p>L&#39;idée est alors de s&#39;assurer d&#39;avoir la dernière version de nos fichiers (ainsi que les nouveaux fichiers et les suppressions) pour les mettre en ligne. Les outils SSH permettent également de lancer automatiquement l&#39;ensemble des commandes nécessaires à cette mise à jour (pour un site Symfony, on a souvent plusieurs commandes à lancer).</p><h3 id="mise-en-place-d-un-deploiement-avec-deployer" tabindex="-1"><a class="header-anchor" href="#mise-en-place-d-un-deploiement-avec-deployer"><span>Mise en place d&#39;un déploiement avec Deployer</span></a></h3><ul><li>Installer deployer avec composer <code>composer require deployer/deployer --dev</code>.</li><li>Mettre en place la configuration nécessaire avec <code>./vendor/bin/dep init</code> (je vous conseille le format yaml)</li></ul><p>J&#39;obtiens un fichier <code>deploy.yaml</code> qu&#39;il ne me reste qu&#39;à adapter :</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Cette ligne permet d&#39;utiliser la configuration toute prête pour un projet Symfony</span></span>
<span class="line"><span class="token comment"># Il ne nous reste qu&#39;à adapter aux particularités du projet.</span></span>
<span class="line"><span class="token key atrule">import</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> recipe/symfony.php</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># Cette ligne a déjà été entrée, normalement. </span></span>
<span class="line">  <span class="token comment"># Je vous conseille toutefois de vous assurer d&#39;avoir le lien SSH</span></span>
<span class="line">  <span class="token key atrule">repository</span><span class="token punctuation">:</span> <span class="token string">&#39;git@github.com:dreeckan/example.git&#39;</span></span>
<span class="line">  <span class="token comment"># Une option pour Windows, qui ne supporte pas le multiplexing</span></span>
<span class="line">  <span class="token key atrule">ssh_multiplexing</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># On configure le ou les serveurs où l&#39;on veut déployer</span></span>
<span class="line"><span class="token key atrule">hosts</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">prod.example.com</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> deployer</span>
<span class="line">    <span class="token key atrule">deploy_path</span><span class="token punctuation">:</span> <span class="token string">&#39;/var/www/prod/&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># On peut créer des tâches supplémentaires si on le souhaite</span></span>
<span class="line"><span class="token comment"># Deployer nous laisse, par défaut, une tâche pour lancer un build npm </span></span>
<span class="line"><span class="token comment"># (inutile si vous n&#39;avez pas de javascript)</span></span>
<span class="line"><span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">cd</span><span class="token punctuation">:</span> <span class="token string">&#39;{{release_path}}&#39;</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token string">&#39;npm run build&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># On peut utiliser after et before pour ajouter des tâches après ou avant d&#39;autres</span></span>
<span class="line"><span class="token comment"># Ici, on demande de débloquer le déploiement lorsqu&#39;un déploiement échoue</span></span>
<span class="line"><span class="token key atrule">after</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">deploy:failed</span><span class="token punctuation">:</span> deploy<span class="token punctuation">:</span>unlock</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Prenons un code un peu amélioré et voyons ce qui a été ajouté :</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Cette ligne permet d&#39;utiliser la configuration toute prête pour un projet Symfony</span></span>
<span class="line"><span class="token comment"># Il ne nous reste qu&#39;à adapter aux particularités du projet.</span></span>
<span class="line"><span class="token key atrule">import</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> recipe/symfony.php</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># Cette ligne a déjà été entrée, normalement. </span></span>
<span class="line">  <span class="token comment"># Je vous conseille toutefois de vous assurer d&#39;avoir le lien SSH</span></span>
<span class="line">  <span class="token key atrule">repository</span><span class="token punctuation">:</span> <span class="token string">&#39;git@github.com:dreeckan/example.git&#39;</span></span>
<span class="line">  <span class="token comment"># On transmet notre clé SSH pour la connexion à GitHub / GitLab</span></span>
<span class="line">  <span class="token key atrule">forward_agent</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token comment"># Pour Windows, qui ne prend pas en compte le multiplexing</span></span>
<span class="line">  <span class="token key atrule">ssh_multiplexing</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token comment"># Je ne veux pas envoyer de stats, merci ;)</span></span>
<span class="line">  <span class="token key atrule">allow_anonymous_stats</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token comment"># Le nom de l&#39;utilisateur qui doit pouvoir écrire dans certains dossiers du serveur</span></span>
<span class="line">  <span class="token key atrule">http_user</span><span class="token punctuation">:</span> www<span class="token punctuation">-</span>data</span>
<span class="line">  <span class="token comment"># On veut utiliser la commande chmod pour permettre l&#39;écriture dans certains dossiers</span></span>
<span class="line">  <span class="token key atrule">writable_mode</span><span class="token punctuation">:</span> <span class="token string">&#39;chmod&#39;</span></span>
<span class="line">  <span class="token comment"># Ce chmod sera exécuté en tant que super utilisateur</span></span>
<span class="line">  <span class="token key atrule">writable_use_sudo</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">keep_releases</span><span class="token punctuation">:</span> <span class="token number">5</span></span>
<span class="line">  <span class="token comment"># Variables utilisées pour le message Discord (voir plus bas &quot;notify:XXX&quot;)</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span> <span class="token string">&#39;Example site&#39;</span></span>
<span class="line">  <span class="token key atrule">discord_webhook</span><span class="token punctuation">:</span> <span class="token string">&quot;https://discordapp.com/api/webhooks/XX/XXXXXXXXXXXXXXXX&quot;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment"># Les dossiers partagés (conservés d&#39;une release à l&#39;autre)</span></span>
<span class="line">  <span class="token key atrule">shared_dirs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> var/log</span>
<span class="line">    <span class="token punctuation">-</span> var/sessions</span>
<span class="line">    <span class="token punctuation">-</span> var/uploads/images</span>
<span class="line">    <span class="token punctuation">-</span> public/cache</span>
<span class="line">  <span class="token comment"># Les fichiers partagés (conservés d&#39;une release à l&#39;autre)</span></span>
<span class="line">  <span class="token key atrule">shared_files</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> .env.local</span>
<span class="line">  <span class="token comment"># Les fichiers où le serveur doit pouvoir écrire</span></span>
<span class="line">  <span class="token key atrule">writable_dirs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> var</span>
<span class="line">    <span class="token punctuation">-</span> var/log</span>
<span class="line">    <span class="token punctuation">-</span> var/cache</span>
<span class="line">    <span class="token punctuation">-</span> var/sessions</span>
<span class="line">    <span class="token punctuation">-</span> var/uploads/images</span>
<span class="line">    <span class="token punctuation">-</span> public/cache</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Liste des hôtes (serveurs) où l&#39;on souhaite déployer et leurs configurations</span></span>
<span class="line"><span class="token key atrule">hosts</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># je masque l&#39;IP du serveur ;)</span></span>
<span class="line">  <span class="token key atrule">XXX.XXX.XXX.XXX</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># C&#39;est l&#39;utilisateur debian du serveur qu&#39;on va utiliser</span></span>
<span class="line">    <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> debian</span>
<span class="line">    <span class="token comment"># Dans quel dossier du serveur va-t-on déployer (installer nos fichiers) ?</span></span>
<span class="line">    <span class="token key atrule">deploy_path</span><span class="token punctuation">:</span> <span class="token string">&#39;/var/www/www.example.com&#39;</span></span>
<span class="line">    <span class="token comment"># La branche à déployer</span></span>
<span class="line">    <span class="token key atrule">branch</span><span class="token punctuation">:</span> master</span>
<span class="line">    <span class="token comment"># Une variable pour Discord (voir plus bas &quot;notify:success&quot;)</span></span>
<span class="line">    <span class="token key atrule">real_url</span><span class="token punctuation">:</span> <span class="token string">&#39;www.example.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># On définit un ensemble de tâches personnalisées, qui vont être utiles pendant/autour du déploiement.</span></span>
<span class="line"><span class="token comment"># Il faudra encore les placer dans le processus de déploiement</span></span>
<span class="line"><span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># La tâche build va appeler la commande make update dans le dossier de la release</span></span>
<span class="line">  <span class="token comment"># Cette commande va faire (entre autre) : composer install, npm install, passer les migrations, etc.</span></span>
<span class="line">  <span class="token comment"># Noter l&#39;appel à la variable release_path, définie par Deployer</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">cd</span><span class="token punctuation">:</span> <span class="token string">&#39;{{release_path}}&#39;</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token string">&#39;make update&#39;</span></span>
<span class="line">  <span class="token comment"># On exécute 2 commandes (arbitraires) pour mettre à jour les droits sur le dossier du projet.</span></span>
<span class="line">  <span class="token key atrule">make:rights</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> sudo chown debian<span class="token punctuation">:</span>www<span class="token punctuation">-</span>data <span class="token punctuation">-</span>R <span class="token punctuation">{</span><span class="token punctuation">{</span> deploy_path <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> sudo chmod g+w <span class="token punctuation">-</span>R <span class="token punctuation">{</span><span class="token punctuation">{</span> deploy_path <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      </span>
<span class="line">  <span class="token comment"># Des tâches pour envoyer des notifications sur Discord, grâce à un webhook</span></span>
<span class="line">  <span class="token comment"># Noter l&#39;appel à la variable application, discord_webhook et real_url définies par nos soins, plus haut</span></span>
<span class="line">  <span class="token key atrule">notify:start</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token string">&quot;curl -H \\&quot;Content-Type: application/json\\&quot; -X POST -d &#39;{\\&quot;content\\&quot;: \\&quot;**Début** du déploiement de {{application}} sur le serveur **prod** !\\&quot;}&#39; {{discord_webhook}}&quot;</span></span>
<span class="line">  <span class="token key atrule">notify:success</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token string">&quot;curl -H \\&quot;Content-Type: application/json\\&quot; -X POST -d &#39;{\\&quot;content\\&quot;: \\&quot;**Réussite** du déploiement de {{application}} sur le serveur **prod** ! :D Il est temps de tester sur https://{{ real_url }} !\\&quot;}&#39; {{discord_webhook}}&quot;</span></span>
<span class="line">  <span class="token key atrule">notify:fail</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token string">&quot;curl -H \\&quot;Content-Type: application/json\\&quot; -X POST -d &#39;{\\&quot;content\\&quot;: \\&quot;**Échec** du déploiement de {{application}} sur le serveur **prod** &gt;.&lt; !\\&quot;}&#39; {{discord_webhook}}&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># On définit quand nos tâches vont être effectuées.</span></span>
<span class="line"><span class="token key atrule">before</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># Avant de mettre en place le lien symbolique, on lance la tâche build</span></span>
<span class="line">  <span class="token key atrule">deploy:symlink</span><span class="token punctuation">:</span> build</span>
<span class="line">  <span class="token comment"># Avant de lancer le déploiement, on envoie un message sur Discord</span></span>
<span class="line">  <span class="token key atrule">deploy</span><span class="token punctuation">:</span> notify<span class="token punctuation">:</span>start</span>
<span class="line"></span>
<span class="line"><span class="token comment"># On définit quand nos tâches vont être effectuées.</span></span>
<span class="line"><span class="token key atrule">after</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># après un échec de déploiement, on débloque le déploiement, et on envoie un message sur Discord</span></span>
<span class="line">  <span class="token key atrule">deploy:failed</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> deploy<span class="token punctuation">:</span>unlock</span>
<span class="line">    <span class="token punctuation">-</span> notify<span class="token punctuation">:</span>fail</span>
<span class="line">  <span class="token comment"># après un déploiement, on change les droits et on envoie un message sur Discord</span></span>
<span class="line">  <span class="token key atrule">deploy</span><span class="token punctuation">:</span> </span>
<span class="line">    <span class="token punctuation">-</span> make<span class="token punctuation">:</span>rights</span>
<span class="line">    <span class="token punctuation">-</span> notify<span class="token punctuation">:</span>success</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const o=s(p,[["render",i],["__file","30-symfony-angular.html.vue"]]),u=JSON.parse(`{"path":"/deploy/30-symfony-angular.html","title":"Symfony et Angular","lang":"fr-FR","frontmatter":{},"headers":[{"level":2,"title":"Automatiser le déploiement","slug":"automatiser-le-deploiement","link":"#automatiser-le-deploiement","children":[{"level":3,"title":"Mise en place d'un déploiement avec Deployer","slug":"mise-en-place-d-un-deploiement-avec-deployer","link":"#mise-en-place-d-un-deploiement-avec-deployer","children":[]}]}],"git":{"updatedTime":1736697822000},"filePathRelative":"deploy/30-symfony-angular.md"}`);export{o as comp,u as data};
