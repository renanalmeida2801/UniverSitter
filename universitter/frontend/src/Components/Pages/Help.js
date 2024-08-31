    /* Help.js */
    import Styles from './Help.module.css';
    import plantImage from './../../img/jardinagem.png';
    import pawsImage from './../../img/patas.png';

    function Help() {
        return (
            <div className={Styles.container}>
                <div className={Styles.containerHeader}>
                    <img src={plantImage} className={Styles.img} alt='plant image'/>
                    <h1 className={Styles.headerTitle}>Central de ajuda</h1>
                    <img src={pawsImage} className={Styles.img} alt='pa image'/>
                </div>
                <div className={Styles.sectionsContainer}>
                    <div className={Styles.section}>
                        <h2>Quem somos?</h2>
                        <p>Nós somos um grupo de estudantes da Universidade Federal do Ceará, apaixonados por animais e plantas. Nosso objetivo é criar um espaço onde a comunidade acadêmica possa se ajudar mutuamente. Sabemos que durante as férias ou períodos em que os alunos viajam, pode ser um desafio encontrar alguém para cuidar dos seus pets e plantas. Por isso, desenvolvemos essa plataforma para conectar cuidadores e donos, garantindo que seus companheiros recebam o melhor cuidado enquanto você está fora.</p>
                    </div>
                    <div className={Styles.section}>
                        <h2>Como funciona?</h2>
                        <p>Nossa plataforma é simples e prática. Alunos que desejam oferecer seus serviços como cuidadores podem se cadastrar e criar um perfil com suas informações e disponibilidade. Os donos de animais e plantas podem buscar cuidadores próximos à sua localização e entrar em contato diretamente através do nosso site. Você pode visualizar avaliações e feedbacks de outros usuários para garantir que está escolhendo o melhor cuidador para suas necessidades. É uma maneira fácil e confiável de garantir que seus amados pets e plantas estejam bem cuidados.</p>
                    </div>
                    <div className={Styles.section}>
                        <h2>Cuidadores?</h2>
                        <p>Os cuidadores em nossa plataforma são estudantes que se dedicam a garantir o bem-estar dos animais e plantas durante a sua ausência. Eles passam por um processo de verificação para garantir que atendam aos nossos padrões de cuidado. Além disso, você pode ver avaliações e recomendações de outros clientes para ajudar na sua escolha. Seja para alimentar, passear ou simplesmente dar carinho, nossos cuidadores estão aqui para ajudar!</p>
                    </div>
                    <div className={Styles.section}>
                        <h2>Fale conosco!</h2>
                        <p>Se você tem dúvidas, sugestões ou precisa de ajuda com nossa plataforma, não hesite em entrar em contato conosco. Estamos aqui para garantir que sua experiência seja a melhor possível. Você pode nos enviar um e-mail, ligar ou utilizar o nosso chat online para receber suporte imediato. Agradecemos seu interesse e estamos ansiosos para ajudar você a encontrar o cuidador perfeito para seus animais e plantas.</p>
                    </div>
                </div>
                <div className={Styles.containerFooter}>
                    <img src={plantImage} className={Styles.img} alt='plant image'/>
                    <h1 className={Styles.headerTitle}>Seja um cuidador e ajude a comunidade!</h1>
                    <img src={pawsImage} className={Styles.img} alt='pa image'/>
                </div>
            </div>
        );
    }

    export default Help;
