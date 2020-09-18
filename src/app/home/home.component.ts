import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  dataitemHeadlineus: any = [];
  dataItemSource: any = [];

  constructor(private rest: RestApiService) {}

  ngOnInit() {

    this.dataitemHeadlineus = [
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "2020 U.S. Open odds, picks: Justin Thomas, Rory McIlroy lead betting favorites entering Round 2 - CBS Sports",
            "description": "McIlroy played great over his first 18 holes and looks to make a big-time run in Round 2",
            "url": "https://www.cbssports.com/golf/news/2020-u-s-open-odds-picks-justin-thomas-rory-mcilroy-lead-betting-favorites-entering-round-2/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2020/09/17/f21becb3-cc6f-4049-965c-44018be7fd01/thumbnail/1200x675/b932ac61ab84ff8587bf7d7b713345e9/justin-thomas-tiger-woods-us-open-getty.jpg",
            "publishedAt": "2020-09-18T09:00:00Z",
            "content": "Fresh off a FedEx Cup-clinching victory in the 2020 Tour Championship, Dustin Johnson was riding his red-hot summer right into Winged Foot as the betting favorite to win the 2020 U.S. Open. However, … [+2169 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "Google corrects unfortunate ‘Stalkerware’ typo allowing partner-tracking apps - The Verge",
            "description": "Google is correcting a “typo” in its Play Store “stalkerware” policy that currently says that apps can be used to track spouses. As it’s written, the policy also says parents cannot track their children.",
            "url": "https://www.theverge.com/2020/9/18/21441154/google-play-store-stalkerware-ban-parent-children-tracking",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/zecX0cPldoJGxd8xivCIx07sXlA=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10745895/acastro_180427_1777_0001.jpg",
            "publishedAt": "2020-09-18T07:48:10Z",
            "content": "The updated stalkerware policy comes into effect next month\r\nIllustration by Alex Castro / The Verge\r\nGoogle is correcting a typo in its Play Store stalkerware policy that currently suggests that app… [+3347 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Jason Cipriani",
            "title": "6 iOS 14 features to try as soon as you install Apple's update on your iPhone - CNET",
            "description": "It's here! iOS 14 brings a ton of new features to your iPhone. We'll show you some of our favorites and how to use them.",
            "url": "https://www.cnet.com/how-to/6-ios-14-features-to-try-as-soon-as-you-install-apples-update-on-your-iphone/",
            "urlToImage": "https://cnet4.cbsistatic.com/img/IrH7vDbd5PIUew1wTvT_ZH0R_pA=/1200x630/2020/07/08/e0c934b6-3f25-43dc-8586-7f7e9f13b8d0/ios-14-7-de-13.jpg",
            "publishedAt": "2020-09-18T07:00:06Z",
            "content": "We're already finding iOS 14 features we absolutely love. \r\nPatrick Holland/CNET\r\nThis story is part of Apple Event, our full coverage of the latest news from Apple headquarters.\r\nAfter installing iO… [+6454 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Taylor Romine, CNN",
            "title": "Louisville Metro Council passes vote of no confidence against mayor over handling of Breonna Taylor case - CNN",
            "description": "The Louisville Metro Council passed a resolution Thursday night that expresses no-confidence in Mayor Greg Fischer for his lack of transparency and mishandling of the Breonna Taylor case, a 26-year-old EMT killed in her home by police.",
            "url": "https://www.cnn.com/2020/09/18/us/louisville-metro-council-breonna-taylor/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200917130210-breonna-taylor-protester-super-tease.jpg",
            "publishedAt": "2020-09-18T06:54:00Z",
            "content": "(CNN)The Louisville Metro Council passed a resolution Thursday night that expresses no-confidence in Mayor Greg Fischer for his lack of transparency and mishandling of the Breonna Taylor case, a 26-y… [+2938 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "New fear grips Europe as Covid tops 30m worldwide - BBC News",
            "description": "Many northern hemisphere countries are bracing for a second wave of the pandemic as winter approaches.",
            "url": "https://www.bbc.com/news/world-54199825",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0C77/production/_114419130_66193b6a-081f-4513-b5d1-75f28286b0bb.jpg",
            "publishedAt": "2020-09-18T06:33:45Z",
            "content": "Image copyrightEPAImage caption\r\n The virus appears to be spreading much faster in India than any other country\r\nThe number of confirmed coronavirus cases across the globe has surpassed 30 million, a… [+6060 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Hillary Vaughn",
            "title": "Analysts estimate 15% of TikTok users will be first-time voters as details emerge from negotiations - Fox Business",
            "description": "Under the deal - all of TikTok US would receive extensive scrutiny from an independent board",
            "url": "https://www.foxbusiness.com/technology/new-analysis-estimates-15-of-tiktok-users-will-be-first-time-voters-as-details-emerge-from-negotiations",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/09/0/0/tiktok-oracle-share-boom-2.jpg?ve=1&tl=1",
            "publishedAt": "2020-09-18T06:31:39Z",
            "content": "New analysis of public data estimate that 15% of all TikTok users will be first-time voters, a sizable chunk of the apps 100 million monthly users.\r\nThe app’s parent company Bytedance is close to wra… [+2593 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "David Aaro",
            "title": "Biden says if Trump acted sooner on coronavirus 'all the people would still be alive' - Fox News",
            "description": "Joe Biden on Thursday said because President Trump failed to act sooner on the coronavirus, he was essentially responsible for every person in the U.S., who died from the disease.",
            "url": "https://www.foxnews.com/politics/biden-says-trump-acted-sooner-coronavirus-all-people-alive",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2020/09/Biden-CNN-Town-Hall-AP-2.jpg",
            "publishedAt": "2020-09-18T05:47:14Z",
            "content": "Joe Biden indicated during a CNN town hall Thursday that President Trump is responsible for every single coronavirus death.\r\n\"If the president had done his job... had done his job from the beginning,… [+1841 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CinemaBlend"
            },
            "author": "Mick Joest",
            "title": "Big Brother Spoilers: Who Won The HOH, And What It Might Mean For Week 7 - CinemaBlend",
            "description": "Here's how Week 7 of Big Brother All-Stars may shape up.",
            "url": "https://www.cinemablend.com/television/2555009/big-brother-spoilers-who-won-the-hoh-and-what-it-might-mean-for-week-7",
            "urlToImage": "https://img.cinemablend.com/quill/0/8/e/4/0/d/08e40d5fc9e3e334de3c69ae05383997522c3f9f.jpg",
            "publishedAt": "2020-09-18T05:06:00Z",
            "content": "Warning! The following contains spoilers from the Big Brother All-Stars' live feeds as of Thursday, September 17. Read at your own risk!\r\nThough there was some excitement in Week 6 of Big Brother All… [+2928 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tom's Guide"
            },
            "author": "Marshall Honorof",
            "title": "The PS5 launch lineup is disappointing — here's why - Tom's Guide",
            "description": "The PS5 has six first-party launch titles, but few are true exclusives",
            "url": "https://www.tomsguide.com/news/ps5-launch-library",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/FdVza3hGXXuPuut6ySLRw7-1200-80.jpg",
            "publishedAt": "2020-09-18T05:00:00Z",
            "content": "We now know pretty much everything there is to know about the PS5: its price and release date, its hardware specifications and its controller features. Thanks to an informative post from Sony, we als… [+4070 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Antonia Farzan, Jennifer Hassan, Rick Noack",
            "title": "Live updates: Three-quarters of Americans worry over vaccine haste, as global coronavirus cases top 30 million - The Washington Post",
            "description": "The share of Americans who would be willing to get a coronavirus vaccine if it were available today has dropped significantly from a few months ago, according to a new survey from Pew Research Center.",
            "url": "https://www.washingtonpost.com/nation/2020/09/18/coronavirus-covid-live-updates-us/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/62MAV4HYDAI6VBPXLFARRCUYZU.jpg&w=1440",
            "publishedAt": "2020-09-18T04:17:00Z",
            "content": "BERLIN A German soccer team deliberately lost a match 37-0, after its players socially distanced amid concerns over the novel coronavirus.\r\nThe social distancing maneuvers came after the lower-league… [+1778 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Henry Meyer, Patrick Donahue",
            "title": "Alexey Navalny's Sloppy Poisoning Turned Angela Merkel Against Vladimir Putin - Bloomberg",
            "description": "What Western officials describe as a botched attempt to kill a leading Kremlin critic has triggered a new downward spiral in Russia’s ties with Europe.",
            "url": "https://www.bloomberg.com/news/articles/2020-09-18/alexey-navalny-s-sloppy-poisoning-turned-angela-merkel-against-vladimir-putin",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isTvYE8_mc.o/v0/1200x800.jpg",
            "publishedAt": "2020-09-18T04:00:00Z",
            "content": "Alexey Navalny’s team was at breakfast in the Siberian city of Tomsk when they received word that the opposition leader had fallen violently ill on his flight home to Moscow.\r\nThe activists raced to … [+7295 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "NHL Highlights | ECF, Gm6 Tampa Bay Lightning @ New York Islanders - Sept. 17, 2020 - NHL",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OUpfQlBPN0RsYWPSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2020-09-18T03:48:32Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "Michelle Starr",
            "title": "Glorious New Hubble Photo Showcases Jupiter's Stormy Side - ScienceAlert",
            "description": "Majestic Jupiter, our Solar System's belligerent big brother, is putting its best side forward*. A sharp new image from the Hubble Space Telescope shows the giant planet's wild, ever-evolving weather - revealing both short- and long-term changes.",
            "url": "https://www.sciencealert.com/glorious-new-hubble-photo-showcases-jupiter-s-stormy-side",
            "urlToImage": "https://www.sciencealert.com/images/2020-09/processed/jupiter-photo_1024.jpg",
            "publishedAt": "2020-09-18T02:19:58Z",
            "content": "Majestic Jupiter, our Solar System's belligerent big brother, is putting its best side forward*. A sharp new image from the Hubble Space Telescope shows the giant planet's wild, ever-evolving weather… [+2997 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nakia McNabb and Scottie Andrew, CNN",
            "title": "An Idaho pastor skeptical of masks lands in the ICU for Covid-19 - CNN",
            "description": "A pastor in Idaho who called himself a \"no-masker\" during a service and repeatedly questioned the veracity of coronavirus case reporting is in the ICU after contracting Covid-19.",
            "url": "https://www.cnn.com/2020/09/17/us/idaho-pastor-covid-masks-trnd/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200917151410-01-idaho-pastor-coronavirus-trnd-super-tease.jpg",
            "publishedAt": "2020-09-18T02:13:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Anatoly Kurmanaev",
            "title": "Jeanine Añez Drops Out of Bolivia's Presidential Election - The New York Times",
            "description": "Less than a year after declaring herself president of her turbulent country, Jeanine Añez abandoned her attempt to win official approval from the voters.",
            "url": "https://www.nytimes.com/2020/09/17/world/americas/bolivia-jeanine-anez.html",
            "urlToImage": "https://static01.nyt.com/images/2020/09/17/world/17bolivia-pix/17bolivia-pix-facebookJumbo.jpg",
            "publishedAt": "2020-09-18T01:43:00Z",
            "content": "It was a surprising end to a presidency that began in a surprising fashion.\r\nI assume the presidency immediately and will do everything necessary to pacify the country, Ms. Añez, then a junior lawmak… [+1062 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Fighting"
            },
            "author": "Damon Martin",
            "title": "Colby Covington believes Tyron Woodley asked to avoid face off with him at UFC Vegas 11 press conference - MMA Fighting",
            "description": "Colby Covington responds to an impromptu change in his planned press conference with Tyron Woodley and the expectations he has for their fight on Saturday night.",
            "url": "https://www.mmafighting.com/2020/9/17/21444498/colby-covington-believes-tyron-woodley-asked-avoid-face-off-him-at-ufc-vegas-11-press-conference",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/GitAEmbym5AvhspGnYCzcBTFy-Q=/0x0:1280x670/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21890252/maxresdefault__3_.jpg",
            "publishedAt": "2020-09-18T01:30:00Z",
            "content": "Colby Covington was anticipating a faceoff with opponent Tyron Woodley on Thursday, but ahead of the UFC Vegas 11 press conference, he was informed theyd no longer share the stage together.\r\nI though… [+3789 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "U.S. Open 2020: Worst shots from Round 1 | Golf Channel - Golf Channel",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9c3E3bnRHQmpBR03SAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2020-09-18T01:23:15Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Billboard"
            },
            "author": "Heran Mamo",
            "title": "Chrissy Teigen Accidentally Reveals if She & John Legend Are Having a Boy or Girl - Billboard",
            "description": "",
            "url": "https://www.billboard.com/articles/news/9451426/chrissy-teigen-accidentally-reveals-third-baby-sex",
            "urlToImage": "https://static.billboard.com/files/media/chrissy-teigen-vf-oscar-party-2020-ap-billboard-1548-1024x677.jpg",
            "publishedAt": "2020-09-18T00:29:10Z",
            "content": "With hazardous gender reveal parties setting California ablaze, Chrissy Teigen safely -- yet accidentally -- announced whether she and John Legend were adding a baby boy or girl to their family.\r\nWhi… [+643 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Anne Gearan, Lena H. Sun",
            "title": "Trump contradicts health advisers on coronavirus vaccine timetable as death toll mounts - The Washington Post",
            "description": "CDC Director Robert Redfield is the latest to run afoul of the president’s upbeat message in the runup to the Nov. 3 election.",
            "url": "https://www.washingtonpost.com/politics/trump-redfield-vaccine-timetable/2020/09/17/155ce8ce-f90f-11ea-a275-1a2c2d36e1f1_story.html",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LI63UUXXSUI6VBPXLFARRCUYZU.jpg&w=1440",
            "publishedAt": "2020-09-18T00:16:00Z",
            "content": "Trump said Redfield made a mistake on both counts, although the CDC directors projection about the timetable for vaccine approval and distribution mirrored those of other top officials, including Ope… [+7397 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Will Thorne",
            "title": "Maya Rudolph and Quibi Emerge as Big Winners on Night 4 of Creative Arts Emmys (Full Winners List) - Variety",
            "description": "Night 4 of the Creative Arts Emmys was headlined by Quibi winning prizes at TV’s top awards. The short-form content producer went home with two statuettes on Thursday night, both of which went to actors from the series “#FreeRayshawn.” Legendary “Matrix” star…",
            "url": "https://variety.com/2020/tv/news/creative-arts-emmys-night-4-winners-list-1234772831/",
            "urlToImage": "https://pmcvariety.files.wordpress.com/2019/05/maya-rudolph-variety-actors-on-actors-e1598539112506.jpg?w=1001",
            "publishedAt": "2020-09-18T00:00:00Z",
            "content": "Night 4 of the Creative Arts Emmys was headlined by Quibi winning prizes at TV’s top awards.\r\nThe short-form content producer went home with two statuettes on Thursday night, both of which went to ac… [+12631 chars]"
        }
    ]
    // this.dataHeadlinesus();
    // this.dataHeadlinesca();
    this.dataItemSource = [
        {
            "id": "abc-news",
            "name": "ABC News",
            "description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
            "url": "https://abcnews.go.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "abc-news-au",
            "name": "ABC News (AU)",
            "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
            "url": "http://www.abc.net.au/news",
            "category": "general",
            "language": "en",
            "country": "au"
        },
        {
            "id": "aftenposten",
            "name": "Aftenposten",
            "description": "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
            "url": "https://www.aftenposten.no",
            "category": "general",
            "language": "no",
            "country": "no"
        },
        {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English",
            "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
            "url": "http://www.aljazeera.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "ansa",
            "name": "ANSA.it",
            "description": "Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
            "url": "http://www.ansa.it",
            "category": "general",
            "language": "it",
            "country": "it"
        },
        {
            "id": "argaam",
            "name": "Argaam",
            "description": "ارقام موقع متخصص في متابعة سوق الأسهم السعودي تداول - تاسي - مع تغطيه معمقة لشركات واسعار ومنتجات البتروكيماويات , تقارير مالية الاكتتابات الجديده ",
            "url": "http://www.argaam.com",
            "category": "business",
            "language": "ar",
            "country": "sa"
        },
        {
            "id": "ars-technica",
            "name": "Ars Technica",
            "description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
            "url": "http://arstechnica.com",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "ary-news",
            "name": "Ary News",
            "description": "ARY News is a Pakistani news channel committed to bring you up-to-the minute Pakistan news and featured stories from around Pakistan and all over the world.",
            "url": "https://arynews.tv/ud/",
            "category": "general",
            "language": "ud",
            "country": "pk"
        },
        {
            "id": "associated-press",
            "name": "Associated Press",
            "description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
            "url": "https://apnews.com/",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "australian-financial-review",
            "name": "Australian Financial Review",
            "description": "The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.",
            "url": "http://www.afr.com",
            "category": "business",
            "language": "en",
            "country": "au"
        },
        {
            "id": "axios",
            "name": "Axios",
            "description": "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
            "url": "https://www.axios.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "bbc-news",
            "name": "BBC News",
            "description": "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
            "url": "http://www.bbc.co.uk/news",
            "category": "general",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "bbc-sport",
            "name": "BBC Sport",
            "description": "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
            "url": "http://www.bbc.co.uk/sport",
            "category": "sports",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "bild",
            "name": "Bild",
            "description": "Die Seite 1 für aktuelle Nachrichten und Themen, Bilder und Videos aus den Bereichen News, Wirtschaft, Politik, Show, Sport, und Promis.",
            "url": "http://www.bild.de",
            "category": "general",
            "language": "de",
            "country": "de"
        },
        {
            "id": "blasting-news-br",
            "name": "Blasting News (BR)",
            "description": "Descubra a seção brasileira da Blasting News, a primeira revista feita pelo  público, com notícias globais e vídeos independentes. Junte-se a nós e torne- se um repórter.",
            "url": "https://br.blastingnews.com",
            "category": "general",
            "language": "pt",
            "country": "br"
        },
        {
            "id": "bleacher-report",
            "name": "Bleacher Report",
            "description": "Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!",
            "url": "http://www.bleacherreport.com",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "bloomberg",
            "name": "Bloomberg",
            "description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
            "url": "http://www.bloomberg.com",
            "category": "business",
            "language": "en",
            "country": "us"
        },
        {
            "id": "breitbart-news",
            "name": "Breitbart News",
            "description": "Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.",
            "url": "http://www.breitbart.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "business-insider",
            "name": "Business Insider",
            "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
            "url": "http://www.businessinsider.com",
            "category": "business",
            "language": "en",
            "country": "us"
        },
        {
            "id": "business-insider-uk",
            "name": "Business Insider (UK)",
            "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
            "url": "http://uk.businessinsider.com",
            "category": "business",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "buzzfeed",
            "name": "Buzzfeed",
            "description": "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
            "url": "https://www.buzzfeed.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "cbc-news",
            "name": "CBC News",
            "description": "CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.",
            "url": "http://www.cbc.ca/news",
            "category": "general",
            "language": "en",
            "country": "ca"
        },
        {
            "id": "cbs-news",
            "name": "CBS News",
            "description": "CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.",
            "url": "http://www.cbsnews.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "cnn",
            "name": "CNN",
            "description": "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
            "url": "http://us.cnn.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "cnn-es",
            "name": "CNN Spanish",
            "description": "Lee las últimas noticias e información sobre Latinoamérica, Estados Unidos, mundo, entretenimiento, política, salud, tecnología y deportes en CNNEspañol.com.",
            "url": "http://cnnespanol.cnn.com/",
            "category": "general",
            "language": "es",
            "country": "us"
        },
        {
            "id": "crypto-coins-news",
            "name": "Crypto Coins News",
            "description": "Providing breaking cryptocurrency news - focusing on Bitcoin, Ethereum, ICOs, blockchain technology, and smart contracts.",
            "url": "https://www.ccn.com",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "der-tagesspiegel",
            "name": "Der Tagesspiegel",
            "description": "Nachrichten, News und neueste Meldungen aus dem Inland und dem Ausland - aktuell präsentiert von tagesspiegel.de.",
            "url": "http://www.tagesspiegel.de",
            "category": "general",
            "language": "de",
            "country": "de"
        },
        {
            "id": "die-zeit",
            "name": "Die Zeit",
            "description": "Aktuelle Nachrichten, Kommentare, Analysen und Hintergrundberichte aus Politik, Wirtschaft, Gesellschaft, Wissen, Kultur und Sport lesen Sie auf ZEIT ONLINE.",
            "url": "http://www.zeit.de/index",
            "category": "business",
            "language": "de",
            "country": "de"
        },
        {
            "id": "el-mundo",
            "name": "El Mundo",
            "description": "Noticias, actualidad, álbumes, debates, sociedad, servicios, entretenimiento y última hora en España y el mundo.",
            "url": "http://www.elmundo.es",
            "category": "general",
            "language": "es",
            "country": "es"
        },
        {
            "id": "engadget",
            "name": "Engadget",
            "description": "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.",
            "url": "https://www.engadget.com",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "entertainment-weekly",
            "name": "Entertainment Weekly",
            "description": "Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.",
            "url": "http://www.ew.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "espn",
            "name": "ESPN",
            "description": "ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
            "url": "http://espn.go.com",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info",
            "description": "ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.",
            "url": "http://www.espncricinfo.com/",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "financial-post",
            "name": "Financial Post",
            "description": "Find the latest happenings in the Canadian Financial Sector and stay up to date with changing trends in Business Markets. Read trading and investing advice from professionals.",
            "url": "http://business.financialpost.com",
            "category": "business",
            "language": "en",
            "country": "ca"
        },
        {
            "id": "focus",
            "name": "Focus",
            "description": "Minutenaktuelle Nachrichten und Service-Informationen von Deutschlands modernem Nachrichtenmagazin.",
            "url": "http://www.focus.de",
            "category": "general",
            "language": "de",
            "country": "de"
        },
        {
            "id": "football-italia",
            "name": "Football Italia",
            "description": "Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.",
            "url": "http://www.football-italia.net",
            "category": "sports",
            "language": "en",
            "country": "it"
        },
        {
            "id": "fortune",
            "name": "Fortune",
            "description": "Fortune 500 Daily and Breaking Business News",
            "url": "http://fortune.com",
            "category": "business",
            "language": "en",
            "country": "us"
        },
        {
            "id": "four-four-two",
            "name": "FourFourTwo",
            "description": "The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.",
            "url": "http://www.fourfourtwo.com/news",
            "category": "sports",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "fox-news",
            "name": "Fox News",
            "description": "Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.",
            "url": "http://www.foxnews.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "fox-sports",
            "name": "Fox Sports",
            "description": "Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.",
            "url": "http://www.foxsports.com",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "globo",
            "name": "Globo",
            "description": "Só na globo.com você encontra tudo sobre o conteúdo e marcas do Grupo Globo. O melhor acervo de vídeos online sobre entretenimento, esportes e jornalismo do Brasil.",
            "url": "http://www.globo.com/",
            "category": "general",
            "language": "pt",
            "country": "br"
        },
        {
            "id": "google-news",
            "name": "Google News",
            "description": "Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "google-news-ar",
            "name": "Google News (Argentina)",
            "description": "Completa cobertura actualizada de noticias agregadas a partir de fuentes de todo el mundo por Google Noticias.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "es",
            "country": "ar"
        },
        {
            "id": "google-news-au",
            "name": "Google News (Australia)",
            "description": "Comprehensive, up-to-date Australia news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "en",
            "country": "au"
        },
        {
            "id": "google-news-br",
            "name": "Google News (Brasil)",
            "description": "Cobertura jornalística abrangente e atualizada, agregada de fontes do mundo inteiro pelo Google Notícias.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "pt",
            "country": "br"
        },
        {
            "id": "google-news-ca",
            "name": "Google News (Canada)",
            "description": "Comprehensive, up-to-date Canada news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "en",
            "country": "ca"
        },
        {
            "id": "google-news-fr",
            "name": "Google News (France)",
            "description": "Informations complètes et à jour, compilées par Google Actualités à partir de sources d&#39;actualités du monde entier.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "fr",
            "country": "fr"
        },
        {
            "id": "google-news-in",
            "name": "Google News (India)",
            "description": "Comprehensive, up-to-date India news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "en",
            "country": "in"
        },
        {
            "id": "google-news-is",
            "name": "Google News (Israel)",
            "description": "כיסוי מקיף ועדכני של חדשות שהצטברו ממקורות בכל העולם על ידי &#39;חדשות Google&#39;.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "he",
            "country": "is"
        },
        {
            "id": "google-news-it",
            "name": "Google News (Italy)",
            "description": "Copertura giornalistica completa e aggiornata ottenuta combinando fonti di notizie in tutto il mondo attraverso Google News.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "it",
            "country": "it"
        },
        {
            "id": "google-news-ru",
            "name": "Google News (Russia)",
            "description": "Исчерпывающая и актуальная информация, собранная службой &quot;Новости Google&quot; со всего света.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "ru",
            "country": "ru"
        },
        {
            "id": "google-news-sa",
            "name": "Google News (Saudi Arabia)",
            "description": "تغطية شاملة ومتجددة للأخبار، تم جمعها من مصادر أخبار من جميع أنحاء العالم بواسطة أخبار Google.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "ar",
            "country": "sa"
        },
        {
            "id": "google-news-uk",
            "name": "Google News (UK)",
            "description": "Comprehensive, up-to-date UK news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com",
            "category": "general",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "goteborgs-posten",
            "name": "Göteborgs-Posten",
            "description": "Göteborgs-Posten, abbreviated GP, is a major Swedish language daily newspaper published in Gothenburg, Sweden.",
            "url": "http://www.gp.se",
            "category": "general",
            "language": "se",
            "country": "se"
        },
        {
            "id": "gruenderszene",
            "name": "Gruenderszene",
            "description": "Online-Magazin für Startups und die digitale Wirtschaft. News und Hintergründe zu Investment, VC und Gründungen.",
            "url": "http://www.gruenderszene.de",
            "category": "technology",
            "language": "de",
            "country": "de"
        },
        {
            "id": "hacker-news",
            "name": "Hacker News",
            "description": "Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as \"anything that gratifies one's intellectual curiosity\".",
            "url": "https://news.ycombinator.com",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "handelsblatt",
            "name": "Handelsblatt",
            "description": "Auf Handelsblatt lesen sie Nachrichten über Unternehmen, Finanzen, Politik und Technik. Verwalten Sie Ihre Finanzanlagen mit Hilfe unserer Börsenkurse.",
            "url": "http://www.handelsblatt.com",
            "category": "business",
            "language": "de",
            "country": "de"
        },
        {
            "id": "ign",
            "name": "IGN",
            "description": "IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.",
            "url": "http://www.ign.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "il-sole-24-ore",
            "name": "Il Sole 24 Ore",
            "description": "Notizie di economia, cronaca italiana ed estera, quotazioni borsa in tempo reale e di finanza, norme e tributi, fondi e obbligazioni, mutui, prestiti e lavoro a cura de Il Sole 24 Ore.",
            "url": "https://www.ilsole24ore.com",
            "category": "business",
            "language": "it",
            "country": "it"
        },
        {
            "id": "independent",
            "name": "Independent",
            "description": "National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.",
            "url": "http://www.independent.co.uk",
            "category": "general",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "infobae",
            "name": "Infobae",
            "description": "Noticias de Argentina y del mundo en tiempo real. Información, videos y fotos sobre los hechos más relevantes y sus protagonistas. Léelo antes en infobae.",
            "url": "http://www.infobae.com/?noredirect",
            "category": "general",
            "language": "es",
            "country": "ar"
        },
        {
            "id": "info-money",
            "name": "InfoMoney",
            "description": "No InfoMoney você encontra tudo o que precisa sobre dinheiro. Ações, investimentos, bolsas de valores e muito mais. Aqui você encontra informação que vale dinheiro!",
            "url": "https://www.infomoney.com.br",
            "category": "business",
            "language": "pt",
            "country": "br"
        },
        {
            "id": "la-gaceta",
            "name": "La Gaceta",
            "description": "El diario de Tucumán, noticias 24 horas online - San Miguel de Tucumán - Argentina - Ultimo momento - Ultimas noticias.",
            "url": "http://www.lagaceta.com.ar",
            "category": "general",
            "language": "es",
            "country": "ar"
        },
        {
            "id": "la-nacion",
            "name": "La Nacion",
            "description": "Información confiable en Internet. Noticias de Argentina y del mundo - ¡Informate ya!",
            "url": "http://www.lanacion.com.ar",
            "category": "general",
            "language": "es",
            "country": "ar"
        },
        {
            "id": "la-repubblica",
            "name": "La Repubblica",
            "description": "Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.",
            "url": "http://www.repubblica.it",
            "category": "general",
            "language": "it",
            "country": "it"
        },
        {
            "id": "le-monde",
            "name": "Le Monde",
            "description": "Les articles du journal et toute l'actualit&eacute; en continu : International, France, Soci&eacute;t&eacute;, Economie, Culture, Environnement, Blogs ...",
            "url": "http://www.lemonde.fr",
            "category": "general",
            "language": "fr",
            "country": "fr"
        },
        {
            "id": "lenta",
            "name": "Lenta",
            "description": "Новости, статьи, фотографии, видео. Семь дней в неделю, 24 часа в сутки.",
            "url": "https://lenta.ru",
            "category": "general",
            "language": "ru",
            "country": "ru"
        },
        {
            "id": "lequipe",
            "name": "L'equipe",
            "description": "Le sport en direct sur L'EQUIPE.fr. Les informations, résultats et classements de tous les sports. Directs commentés, images et vidéos à regarder et à partager !",
            "url": "https://www.lequipe.fr",
            "category": "sports",
            "language": "fr",
            "country": "fr"
        },
        {
            "id": "les-echos",
            "name": "Les Echos",
            "description": "Toute l'actualité économique, financière et boursière française et internationale sur Les Echos.fr",
            "url": "https://www.lesechos.fr",
            "category": "business",
            "language": "fr",
            "country": "fr"
        },
        {
            "id": "liberation",
            "name": "Libération",
            "description": "Toute l'actualité en direct - photos et vidéos avec Libération",
            "url": "http://www.liberation.fr",
            "category": "general",
            "language": "fr",
            "country": "fr"
        },
        {
            "id": "marca",
            "name": "Marca",
            "description": "La mejor información deportiva en castellano actualizada minuto a minuto en noticias, vídeos, fotos, retransmisiones y resultados en directo.",
            "url": "http://www.marca.com",
            "category": "sports",
            "language": "es",
            "country": "es"
        },
        {
            "id": "mashable",
            "name": "Mashable",
            "description": "Mashable is a global, multi-platform media and entertainment company.",
            "url": "https://mashable.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "medical-news-today",
            "name": "Medical News Today",
            "description": "Medical news and health news headlines posted throughout the day, every day.",
            "url": "http://www.medicalnewstoday.com",
            "category": "health",
            "language": "en",
            "country": "us"
        },
        {
            "id": "msnbc",
            "name": "MSNBC",
            "description": "Breaking news and in-depth analysis of the headlines, as well as commentary and informed perspectives from The Rachel Maddow Show, Morning Joe & more.",
            "url": "http://www.msnbc.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "mtv-news",
            "name": "MTV News",
            "description": "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
            "url": "http://www.mtv.com/news",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "mtv-news-uk",
            "name": "MTV News (UK)",
            "description": "All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.",
            "url": "http://www.mtv.co.uk/news",
            "category": "entertainment",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "national-geographic",
            "name": "National Geographic",
            "description": "Reporting our world daily: original nature and science news from National Geographic.",
            "url": "http://news.nationalgeographic.com",
            "category": "science",
            "language": "en",
            "country": "us"
        },
        {
            "id": "national-review",
            "name": "National Review",
            "description": "National Review: Conservative News, Opinion, Politics, Policy, & Current Events.",
            "url": "https://www.nationalreview.com/",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "nbc-news",
            "name": "NBC News",
            "description": "Breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.",
            "url": "http://www.nbcnews.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "news24",
            "name": "News24",
            "description": "South Africa's premier news source, provides breaking news on national, world, Africa, sport, entertainment, technology and more.",
            "url": "http://www.news24.com",
            "category": "general",
            "language": "en",
            "country": "za"
        },
        {
            "id": "new-scientist",
            "name": "New Scientist",
            "description": "Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
            "url": "https://www.newscientist.com/section/news",
            "category": "science",
            "language": "en",
            "country": "us"
        },
        {
            "id": "news-com-au",
            "name": "News.com.au",
            "description": "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.",
            "url": "http://www.news.com.au",
            "category": "general",
            "language": "en",
            "country": "au"
        },
        {
            "id": "newsweek",
            "name": "Newsweek",
            "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
            "url": "https://www.newsweek.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "new-york-magazine",
            "name": "New York Magazine",
            "description": "NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.",
            "url": "http://nymag.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "next-big-future",
            "name": "Next Big Future",
            "description": "Coverage of science and technology that have the potential for disruption, and analysis of plans, policies, and technology that enable radical improvement.",
            "url": "https://www.nextbigfuture.com",
            "category": "science",
            "language": "en",
            "country": "us"
        },
        {
            "id": "nfl-news",
            "name": "NFL News",
            "description": "The official source for NFL news, schedules, stats, scores and more.",
            "url": "http://www.nfl.com/news",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "nhl-news",
            "name": "NHL News",
            "description": "The most up-to-date breaking hockey news from the official source including interviews, rumors, statistics and schedules.",
            "url": "https://www.nhl.com/news",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "nrk",
            "name": "NRK",
            "description": "NRK er Norges største tilbud på nett: nyheter fra Norge og verden, lokalnyheter, radio- og tv-program, podcast, vær, helse-, kultur-, underholdning-, humor- og debattstoff.",
            "url": "https://www.nrk.no",
            "category": "general",
            "language": "no",
            "country": "no"
        },
        {
            "id": "politico",
            "name": "Politico",
            "description": "Political news about Congress, the White House, campaigns, lobbyists and issues.",
            "url": "https://www.politico.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "polygon",
            "name": "Polygon",
            "description": "Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.",
            "url": "http://www.polygon.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "rbc",
            "name": "RBC",
            "description": "Главные новости политики, экономики и бизнеса, комментарии аналитиков, финансовые данные с российских и мировых биржевых систем на сайте rbc.ru.",
            "url": "https://www.rbc.ru",
            "category": "general",
            "language": "ru",
            "country": "ru"
        },
        {
            "id": "recode",
            "name": "Recode",
            "description": "Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.",
            "url": "http://www.recode.net",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "reddit-r-all",
            "name": "Reddit /r/all",
            "description": "Reddit is an entertainment, social news networking service, and news website. Reddit's registered community members can submit content, such as text posts or direct links.",
            "url": "https://www.reddit.com/r/all",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "reuters",
            "name": "Reuters",
            "description": "Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.",
            "url": "http://www.reuters.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "rt",
            "name": "RT",
            "description": "Актуальная картина дня на RT: круглосуточное ежедневное обновление новостей политики, бизнеса, финансов, спорта, науки, культуры. Онлайн-репортажи с места событий. Комментарии экспертов, актуальные интервью, фото и видео репортажи.",
            "url": "https://russian.rt.com",
            "category": "general",
            "language": "ru",
            "country": "ru"
        },
        {
            "id": "rte",
            "name": "RTE",
            "description": "Get all of the latest breaking local and international news stories as they happen, with up to the minute updates and analysis, from Ireland's National Broadcaster.",
            "url": "https://www.rte.ie/news",
            "category": "general",
            "language": "en",
            "country": "ie"
        },
        {
            "id": "rtl-nieuws",
            "name": "RTL Nieuws",
            "description": "Volg het nieuws terwijl het gebeurt. RTL Nieuws informeert haar lezers op een onafhankelijke, boeiende en toegankelijke wijze over belangrijke ontwikkelingen in eigen land en de rest van de wereld.",
            "url": "https://www.rtlnieuws.nl/",
            "category": "general",
            "language": "nl",
            "country": "nl"
        },
        {
            "id": "sabq",
            "name": "SABQ",
            "description": "صحيفة الكترونية سعودية هدفها السبق في نقل الحدث بمهنية ومصداقية خدمة للوطن والمواطن.",
            "url": "https://sabq.org",
            "category": "general",
            "language": "ar",
            "country": "sa"
        },
        {
            "id": "spiegel-online",
            "name": "Spiegel Online",
            "description": "Deutschlands führende Nachrichtenseite. Alles Wichtige aus Politik, Wirtschaft, Sport, Kultur, Wissenschaft, Technik und mehr.",
            "url": "http://www.spiegel.de",
            "category": "general",
            "language": "de",
            "country": "de"
        },
        {
            "id": "svenska-dagbladet",
            "name": "Svenska Dagbladet",
            "description": "Sveriges ledande mediesajt - SvD.se. Svenska Dagbladets nyhetssajt låter läsarna ta plats och fördjupar nyheterna.",
            "url": "https://www.svd.se",
            "category": "general",
            "language": "se",
            "country": "se"
        },
        {
            "id": "t3n",
            "name": "T3n",
            "description": "Das Online-Magazin bietet Artikel zu den Themen E-Business, Social Media, Startups und Webdesign.",
            "url": "https://t3n.de",
            "category": "technology",
            "language": "de",
            "country": "de"
        },
        {
            "id": "talksport",
            "name": "TalkSport",
            "description": "Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.",
            "url": "http://talksport.com",
            "category": "sports",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "techcrunch",
            "name": "TechCrunch",
            "description": "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
            "url": "https://techcrunch.com",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "techcrunch-cn",
            "name": "TechCrunch (CN)",
            "description": "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
            "url": "https://techcrunch.cn",
            "category": "technology",
            "language": "zh",
            "country": "zh"
        },
        {
            "id": "techradar",
            "name": "TechRadar",
            "description": "The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.",
            "url": "http://www.techradar.com",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "the-american-conservative",
            "name": "The American Conservative",
            "description": "Realism and reform. A new voice for a new generation of conservatives.",
            "url": "http://www.theamericanconservative.com/",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "the-globe-and-mail",
            "name": "The Globe And Mail",
            "description": "The Globe and Mail offers the most authoritative news in Canada, featuring national and international news.",
            "url": "https://www.theglobeandmail.com",
            "category": "general",
            "language": "en",
            "country": "ca"
        },
        {
            "id": "the-hill",
            "name": "The Hill",
            "description": "The Hill is a top US political website, read by the White House and more lawmakers than any other site -- vital for policy, politics and election campaigns.",
            "url": "http://thehill.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "the-hindu",
            "name": "The Hindu",
            "description": "The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.",
            "url": "http://www.thehindu.com",
            "category": "general",
            "language": "en",
            "country": "in"
        },
        {
            "id": "the-huffington-post",
            "name": "The Huffington Post",
            "description": "The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.",
            "url": "http://www.huffingtonpost.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "the-irish-times",
            "name": "The Irish Times",
            "description": "The Irish Times online. Latest news including sport, analysis, business, weather and more from the definitive brand of quality news in Ireland.",
            "url": "https://www.irishtimes.com",
            "category": "general",
            "language": "en",
            "country": "ie"
        },
        {
            "id": "the-jerusalem-post",
            "name": "The Jerusalem Post",
            "description": "The Jerusalem Post is the leading online newspaper for English speaking Jewry since 1932, bringing news and updates from the Middle East and all over the Jewish world.",
            "url": "https://www.jpost.com/",
            "category": "general",
            "language": "en",
            "country": "is"
        },
        {
            "id": "the-lad-bible",
            "name": "The Lad Bible",
            "description": "The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!",
            "url": "https://www.theladbible.com",
            "category": "entertainment",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "the-next-web",
            "name": "The Next Web",
            "description": "The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.",
            "url": "http://thenextweb.com",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "the-sport-bible",
            "name": "The Sport Bible",
            "description": "TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!",
            "url": "https://www.thesportbible.com",
            "category": "sports",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "the-times-of-india",
            "name": "The Times of India",
            "description": "Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.",
            "url": "http://timesofindia.indiatimes.com",
            "category": "general",
            "language": "en",
            "country": "in"
        },
        {
            "id": "the-verge",
            "name": "The Verge",
            "description": "The Verge covers the intersection of technology, science, art, and culture.",
            "url": "http://www.theverge.com",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal",
            "description": "WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.",
            "url": "http://www.wsj.com",
            "category": "business",
            "language": "en",
            "country": "us"
        },
        {
            "id": "the-washington-post",
            "name": "The Washington Post",
            "description": "Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.",
            "url": "https://www.washingtonpost.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "the-washington-times",
            "name": "The Washington Times",
            "description": "The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.",
            "url": "https://www.washingtontimes.com/",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "time",
            "name": "Time",
            "description": "Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.",
            "url": "http://time.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "usa-today",
            "name": "USA Today",
            "description": "Get the latest national, international, and political news at USATODAY.com.",
            "url": "http://www.usatoday.com/news",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "vice-news",
            "name": "Vice News",
            "description": "Vice News is Vice Media, Inc.'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of \"under - reported stories\".",
            "url": "https://news.vice.com",
            "category": "general",
            "language": "en",
            "country": "us"
        },
        {
            "id": "wired",
            "name": "Wired",
            "description": "Wired is a monthly American magazine, published in print and online editions, that focuses on how emerging technologies affect culture, the economy, and politics.",
            "url": "https://www.wired.com",
            "category": "technology",
            "language": "en",
            "country": "us"
        },
        {
            "id": "wired-de",
            "name": "Wired.de",
            "description": "Wired reports on how emerging technologies affect culture, the economy and politics.",
            "url": "https://www.wired.de",
            "category": "technology",
            "language": "de",
            "country": "de"
        },
        {
            "id": "wirtschafts-woche",
            "name": "Wirtschafts Woche",
            "description": "Das Online-Portal des führenden Wirtschaftsmagazins in Deutschland. Das Entscheidende zu Unternehmen, Finanzen, Erfolg und Technik.",
            "url": "http://www.wiwo.de",
            "category": "business",
            "language": "de",
            "country": "de"
        },
        {
            "id": "xinhua-net",
            "name": "Xinhua Net",
            "description": "中国主要重点新闻网站,依托新华社遍布全球的采编网络,记者遍布世界100多个国家和地区,地方频道分布全国31个省市自治区,每天24小时同时使用6种语言滚动发稿,权威、准确、及时播发国内外重要新闻和重大突发事件,受众覆盖200多个国家和地区,发展论坛是全球知名的中文论坛。",
            "url": "http://xinhuanet.com/",
            "category": "general",
            "language": "zh",
            "country": "zh"
        },
        {
            "id": "ynet",
            "name": "Ynet",
            "description": "ynet דף הבית: אתר החדשות המוביל בישראל מבית ידיעות אחרונות. סיקור מלא של חדשות מישראל והעולם, ספורט, כלכלה, תרבות, אוכל, מדע וטבע, כל מה שקורה וכל מה שמעניין ב ynet.",
            "url": "http://www.ynet.co.il",
            "category": "general",
            "language": "he",
            "country": "is"
        }
    ]
  }

  async dataHeadlinesus() {
    await this.rest.getTopHeadlineus().subscribe(data => {
      this.dataitemHeadlineus = data["articles"];
    });
  }

  async dataHeadlinesca() {
    await this.rest.getSource().subscribe(data => {
      this.dataItemSource = data["sources"];
    });
  }
}
