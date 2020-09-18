import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private rest:RestApiService) { }
  dataitemHeadlineus:any=[]
  id;
  length;
  datatest
  ngOnInit() {
    this.datatest = [
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
    this.activatedRoute.params.subscribe(async res => {
            this.id = res['id'];
    //         await this.rest.searchData(this.id).subscribe(data => {
    //         this.dataitemHeadlineus = data["articles"];
    //         this.length = this.dataitemHeadlineus.length;
    // });
    

    this.dataitemHeadlineus = this.datatest.filter(data=>data.title.toLowerCase().match(this.id.toLowerCase()) || data.description.toLowerCase().match(this.id.toLowerCase()))
        });
    
  }

}
