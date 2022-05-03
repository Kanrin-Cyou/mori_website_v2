import React from 'react';
import {Grid,Box,Button, Typography,Container} from '@mui/material';
import LawImage from "../asset/law.jpg";
import WorkImage from '../asset/workplace.jpg'
import LearningCard from '../components/LearningCard'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';

var Scroll = require('react-scroll');

export default function Home(){

    var scroll = Scroll.animateScroll; 
    const handleNav = (address) => {
        scroll.scrollToTop();
    };


    const legalContract = [
        {
            title:'顧問契約の概要',
            note:'顧問契約を締結したのち、LINE・WECHAT等のSNSでグループを作成します。行政書士と通訳（中国語・韓国語・英語・ロシア語対応）と顧問先担当者がグループに参加し、日常的に相談対応を行います。入管業務に関連する内容であれば幅広く相談の対象範囲となります。基本的な信頼関係の構築を第一に考え継続的な支援を行います。',
        },
        {
            title:'メリット',
            note:'継続的な支援を行うことで、既存情報の共有を前提に顧問先の現状把握が短時間で可能となるため、問題解決が効率的に実現します。顧問先については情報交流が円滑になることを前提に、派生する各種業務において顧問先割引を適用致します。',
        },
        {
            title:'料金例',
            note:'■ 顧問企業社員雇用管理関連が中心の場合…月額22,000円(税込) \r ■ 顧問企業営業案件の後方支援等を含む場合…月額33,000円(税込）',
        },
    ]

    const laborHighLevel = [
        {
            title:'在留資格「高度専門職」とは',
            note:'在留資格「高度専門職」とは、高度人材を日本が積極的に受け入れることで国家の成長を促進するために政策的に設けられた在留資格です。「高度人材ポイント」が70点を超える場合、出入国在留管理上の優遇措置が与えられます。',
        },
        {
            title:'「高度専門職」ビザの長所',
            note:'一番の長所は永住申請までに必要とされる期間（通常10年）が短縮される点にあります。「高度人材ポイント」が70点を超える場合上陸から3年、80点を超える場合上陸から1年で永住申請が可能となります。その他にも親の帯同、在留期間「5年」の付与、家事使用人の帯同など多くの長所があります。',
        },
        {
            title:'取得に際しての留意事項',
            note:'「高度人材ポイント」は正確にカウントする必要があり、一見高度人材ポイント基準をクリアしているように見える場合でも実際には要件を充足しない場合があります。また、高度人材ポイントの付与基準は政策によって随時改定がなされているため、常に最新の基準でのポイント計算をすることが重要となります。',
        },
    ]

    const laborBusiness = [
        {
            title:'「経営・管理」ビザの概要',
            note:'在留資格「経営・管理」とは、日本国内の事業所において事業の経営・管理を行う活動をする場合に取得する在留資格になります。会社を設立してその経営を行う場合と、既存の会社の役員や管理部門職員として働く場合の二種類があります。いずれにせよ、具体的に事業を行うことが要件とされているため、単なる投資のみでは「経営・管理」ビザを取得することはできません。',
        },
        {
            title:'「経営・管理」ビザ取得の要件',
            note:'「経営・管理」ビザ取得のためには、事業規模の要件、事業所の確保要件、事業計画の要件の充足が重要とされています。一般的には500万円以上の投資を行い、事業所を確保し、一定以上の事業規模で安定性・継続性が認められる事業計画書を具体的な根拠資料に基づき作成する必要があります。',
        },
        {
            title:'取得に際しての留意事項',
            note:'資本金の確保、日本国内への送金、事業所の取得・契約、会社設立、税務署等への届出、事業計画策定、入管申請という各段階それぞれについて留意すべき事項が多く、成功確率を高めるため、手続開始前の段階での具体的なビザ申請手続の計画を立案しておく必要があります。',
        },
    ]

    const serviceTypes = [
        {
            title:'国際法務顧問契約',
            icon: <RuleOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'SNS（LINE・WECHAT等）にて専用グループを作成し入管手続を中心とした顧客課題に対応。',
            detail:legalContract
        },
        {
            title:'在留資格「高度専門職」取得支援',
            icon: <NoteAltOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'高度人材のための優遇措置（在留期間・永住権取得・家族帯同）を得るための支援業務。',
            detail:laborHighLevel
        },
        {
            title:'在留資格「経営・管理」取得支援',
            icon: <CurrencyExchangeIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'日本で事業を開始する外国人・外国人企業を会社設立から設立後の経営まで総合的に支援。',
            detail:laborBusiness
        }
    ]


    return(
        <Box>
            <Box
                sx={{
                    width: '100vw',
                    backgroundColor: 'primary.main',
                }}
                id="top"
            >
                <Container sx={{pt:10, pb:8}}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={7}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            display= "flex"
                            flexDirection= "column"
                            justifyContent= "center"
                        >
                            <Box>
                                <Typography
                                variant="h3"
                                component="div"
                                sx={{color:"white",pt:5, flexGrow: 1 }}
                                >
                                入管業務に
                                <br/>
                                豊富な経験と実績を持つ
                                <br/>
                                行政書士事務所
                                </Typography>

                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{color:"white",pt:5,pr:3,flexGrow: 1 }}
                                >
                                当事務所は入管業務に関する知識と長年の経験に基づき、顧問先の皆様の入管に関する疑問点に、適時に最適な解決案を提案いたします。
                                </Typography>

                                <Button 
                                    color="secondary" 
                                    variant="contained"
                                    textSizeMedium
                                    onClick={()=> handleNav('/mori_website_v2/contact')}
                                    sx = {{mt:5, pt:2,pb:2,pl:3,pr:3,color:'black'}}
                                    xs = {{color:'black'}}
                                >
                                    <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    >
                                    お問い合わせ
                                    </Typography>
                                </Button>
                            </Box>

                        </Grid>

                        <Grid display={{xs:'none',md:'block'}} item xs={0} md={5} pt={15} mt={5}
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <img style={{height:"auto",maxWidth:"100%"}} src={LawImage} alt='study'/>
                        </Grid>

                    </Grid>
                </Container>    
            </Box>

            <Box 
                sx={{
                    width: '100vw',
                    backgroundColor: 'white',
                }}
                id="welcome"
            >
                <Container sx={{pt:8}}>
                
                    <Typography sx={{color:"primary.main"}} align="left" variant="h3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    >
                        ご挨拶	
                    </Typography>

                    <Typography sx={{pt:5, pb:8, color:"text.secondary"}} align="left" variant="h5"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    >
                            当事務所は都営新宿線新宿三丁目駅のそばにある総合事務所です。2006年の開業以来、入管業務、企業法務等を中心に事業を行っております。併設の税理士、司法書士、社会保険労務士各事務所と緊密に連携しており、多くの事例に即応できます。
                            <br/>
                            <br/>
                            入管業務では、個々の申請案件とともに不動産会社様などへの継続的な支援業務も多く対応しております。例えば、外国人が日本で不動産投資をしつつ在留資格を得て日本で生活したいというときには、不動産投資に伴い必要となる入管知識を提供します。
                            <br/>
                            <br/>
                            継続的な支援関係を通じて、顧問先の皆様の実状を踏まえた適切な情報提供を行いたいと考えております。入管問題についての身近な相談者としてお気軽にご活用ください。
                    </Typography>
                </Container>
            </Box>

            <Box 
                sx={{
                    width: '100vw',
                    backgroundColor: '#fafafa',
                }}
                id="business"
            >
                <Container sx={{pt:8, pb:8}}>

                    <Grid container spacing={2} pb={5}>
                        <Grid item sx={7}>
                            <Typography sx={{color:"primary.main"}} align="left" variant="h3">
                                業務内容
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid id="hero" container spacing={2}>
                        {serviceTypes.map(items => (
                            <Grid item style={{width:"100%"}} xs={12} key={items.title} spacing={2}> 
                                <LearningCard items={items}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box 
                    sx={{
                        width: '100vw',
                        backgroundColor: 'white',
                    }}
                    id="introduction"
            >
                <Container sx={{pt:8}}>

                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <Typography sx={{pb:2, color:"primary.main"}} align="left" variant="h3"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                行政書士紹介
                            </Typography>

                            <Typography sx={{pt:8,pb:2}} align="left" variant="h4"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                行政書士　森下　洋
                            </Typography>

                            <Typography align="left" sx={{pb:8}} variant="h5"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            >
                                <br/>
                                ■ 1975年生
                                <br/>
                                ■ 登録番号:06081463
                                <br/>
                                ■ 早稲田大学政経学部卒
                                <br/>
                                ■ 東京都行政書士会新宿支部所属
                                <br/>
                                ■ 宅地建物取引士        
                            </Typography>              
                        </Grid>

                        <Grid item xs={12} md={6}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        >
                            
                            <img style={{height:"auto",maxWidth:"100%"}} src={WorkImage} alt='workplace' 
                            data-aos="fade-up"
                            data-aos-duration="1000"/>
                            
                        </Grid>
                    </Grid>
                </Container>
  
            </Box>             

            <Box
                sx={{
                    pt:8,
                    width: '100vw',
                    height: '1700px',
                }}
                id="questionary"
            >
                    <iframe src="https://tayori.com/f/mktoiawase/" 
                            title="tayoriQuestion"
                            frameborder="0"
                            width="100%"
                            height="100%"
                            marginheight="0"
                            marginwidth="0"
                            scrolling="no"
                    >
                    </iframe>
            </Box> 

        </Box>
    )
}
