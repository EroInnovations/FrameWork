const URL='https://docs.google.com/spreadsheets/d/1x_Nruw60vwcWJKkMUWpNncGzQSoPgHoMP2X8so3eS8I/edit?usp=sharing';

const NOVASTART=()=>{

    DELETEDATA('','ScrollPoint');

    APPMODE('#ffffff');
    
    VISITOR(URL,'Users');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <header class='HomeHeader'>

            <div id='HeaderHolder' class='TopNav'>

                <img id='Logo' class='LeftIcon' src='https://ashshakurcharity.org/Assets/logo.jpg'/>
        
                <h1 class='CompanyName'>Ash Shakur Charity and Orphanage Aid</h1>

                <p class='Motto'>"Helping the poor orphans and the needy people"</p>

                <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEMENUICON}"/>

                <img id='MenuClose' onclick='MENUCLOSE()' class="RightIcon" src="${WHITECLOSEICON}"/>

            </div>

            <div id='DonateSection' class='TopNav'>

                <h1 class='DonateWord'>Donate</h1>
            
            </div>

            <div class='TopNav' id='Menu' >

                <p onclick='ABOUTUSPAGEROUTER()'>About Us</p>

                <p onclick='PROJECTPAGEROUTER()'>Our Projects</p>

                <p onclick='CONTACTUSPAGEROUTER()'>Contact Us</p>

            </div>

        </header>

        <div id='HomeScroll' class='ScrollDiv'>

            <div class='MainImage'>
        
                <img src='https://ashshakurcharity.org/Assets/waterwells/waterwellmain.jpg'/>

                <footer class='MainFooter'>

                    <p class='Message'>Our Prophet Muhammed is reported to have said ,"<b class='SubMessage'>The Best Form of Charity is to give someone water to drink.</b> "</p>
                
                </footer>
        
            </div>

            <br><br>

            <h1>With Regards</h1>

            <br>

            <p class='LeftText'>Ash Shakur Charity and orphanage aid is a nonprofit organization dedicated to transforming lives by addressing the needs of orphans, underprevileged children, and vulnerable communities. With a mission to provide access to water and sanitation, food and clothing, Qurbani and aqeeqa, Ramadan programs, education, healthcareand shelter, we aim to create sustainable solutions that empower individuals and fosterhope.</p>

            <br>

            <p class='LeftText'>Since our inception, we have encouted countless lives through provideing education, supporting healthcare initiatives, and providing safe havns to those in need. Every donation and volunteer efforts brings closer to a word where every child has the opportunity to thrive.</p>

            <br>

            <h1 id='QurbanSection'  class='Season'>QURBAN</h1>

            <br>

            <div class='SlideDiv'>

                <img onclick='QURBAN()'  class='QurabanImage'  src='https://ashshakurcharity.org/Assets/Quraban/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>It is neither their meat nor their bolld that reaches Allah but it is piety from you that reaches Him.</p>

            <br><br>

            <h1 id='HotMealSection' class='Season'>HOT MEAL</h1>

            <br>

            <div class='SlideDiv'>

                <img onclick='HOTMEAL()' class='QurabanImage' src='https://ashshakurcharity.org/Assets/hotmeal/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>Every Child Deserves a full plate</p>

            <br><br>

            <h1 id='FoodPackSection' class='Season'>FOOD PACKS</h1>

            <br>

            <div class='SlideDiv'>

                <img onclick='FOODPACK()' class='QurabanImage' src='https://ashshakurcharity.org/Assets/hotmeal/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>Distributing food packs to combat hunger to the most needy families and vulunerable communities.</p>

            <br><br>

            <h1 class='Season'>MOSQUE CONSTRUCTION</h1>

            <br>

            <div class='SlideDiv'>

                <img class='QurabanImage' src='https://ashshakurcharity.org/Assets/hotmeal/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>Whoever builds a mosque, Allah builds for him/her a house in Paradise.</p>

            <br><br>

            <h1 id='QuranSection' class='Season'>QURAN DISTRIBUTION</h1>

            <br>

            <div class='SlideDiv'>

                <img onclick='QURANDISTRIBUTION()' class='QurabanImage' src='https://ashshakurcharity.org/Assets/hotmeal/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>Sharing Quran is swadaqatul-jariya in which whoever gives one receives a reward from whenever someone recites it.</p>

            <br><br>

            <p class='PoweringCompany' onclick='POWERUS()'>Powered by Elite Robust Ontology</p>

            <br>
        
        </div>

    `);

    SCROLLPOINT(sessionStorage.getItem('ScrollPoint'));

};

const QURBAN=()=>{

    STOREDATA('','ScrollPoint','QurbanSection');

    STOREDATA('','ProjectName','QURBAN');

    STOREDATA('','Image','https://ashshakurcharity.org/Assets/Quraban/main.jpg');

    STOREDATA('','Title','Make your sacrifice and aqeeqa');

    STOREDATA('','SubTitle','Qurbani Sacrifice 2025 pre order now!');

    STOREDATA('','Story',`<p class='LeftText'>Qurbani animal sacrifices is a significant event for muslims during the Islamic month of Dhuk hijjah.At our charity we mark this tradition with our an annual event, supported by your donations.Allihamudullilah last year you hjelped us provide Qurbani fresh meat and meals - this year with your generous help we can provvide nutrious food offerings it is needed most in Uganda and other Africa countries on Eid al Adha In sha Allah.</p><h3>It is neither meat nor their blood that reaches Allah, but is piety from you that reaches Him.</h3>
    <br>
    <h3>Qur'an 22:37</h3>
    <br>
    <p class='LeftText'>All Muslims adults who are eligible to pay Zakat must make an animal sacrifice. By giving your qurbani, you are fullfilling your religious obligation to provide quality, nutrious food to the poor.</p>
    <br>
    <h3>What is Qurbani?</h3>
    <br>
    <p class='LeftText'>Qurbani is the rightious of sheep, goats, camel and cattle between the tenth and twelfth days of Dhul Hijjah, the final month pof the Islamic calender.Qurbani is a sacred acyt to honour the tradition of the blessed Prophet Ibrahim(AS), his beloved son Ismail(AS)and their story of Sacrifice and devotion to Allah(SWT).</p>
    <br>
    <p class='LeftText'>We called to him "O Ibrahim , you have fulfilled the vision. Indeed we thus reward the doers of good,this was a clear trial."Qur'an(37:104)</p>
    <p class='LeftText'>A single qurbani donation can provide nutrious meals ,and supply protein-filled meat to where iyts most throughout the year.</p>
    <br>
    <h3>Who is Qurbani compulsory for?</h3>
    <br>
    <p class='LeftText'>Qurbani holds a special place in Islam. Its importance is stressed upon the qur'an and it serves as a reminder of prophet Ibrahim(AS) devotion and obedience.</p>
    <p class='LeftText'>According to many scholars, Qurbani is an obligation for all muslims whose wealth reaches the zakat threshold. Despite this, its critical role within Islam is often missed, resulting in tremendous baraka being lost.</p>
    <br>
    <p class='LeftText'>The Prophet Muhammad said:"For every hair of the Qurbani, you nreceived reward from Allah(SWT)"</p>
    <br>
    <p class='LeftText'>It is known that donating Qurbani brings abundant rewards from Allah(SWT). But crucially, the most imprtant part of giving Qurbani is the intension: It must be given humbly with Allah's consciousness(Taqwa)</p>
    <br>
    <h3>When is Qurbani?</h3>
    <br>
    <p class='LeftText'>It is advisable to donayte as early as possible to ensure their is enough time of allocation and preparation</p>
    <br>
    <p class='LeftText'>The time for physically offerings begin after the Eid prayer on Eid-al-Aldha, whjich this year it is expected to be 16th June and it ends when the sun sets on the thirteenth of Dhu'l-Hijjah.</p>
    <br>
    <p class='LeftText'>There are four days of sacrifice: the day of Eid-al-Adhaand the three days after it.</p>
    <br>
    <h3>What does 'where most needed' mean?</h3>
    <br>
    <p class='LeftText'>We work with experts in the field as well as our established patners on the ground to locate communities and people that are most needed,sowhen we say your donation is being delivered to where it is most needed, rest assured that your helping support some of the most vulnerable communities in the on the land of Africa!</p>
    <br>
    <p class='LeftText'>We always do our best to meet your requests. Ash shakur Charity will endavour to use your funds as requested, wherever possible. If for any reason we can not use your donation as you have indicated, we will use to fund similar projects in several communities.</p>`);

    ROUTE(' ',SINGLEPROJECTPAGE,'HOMEPAGE');
    
};

const HOTMEAL=()=>{

    STOREDATA('','ScrollPoint','HotMealSection');
    
    STOREDATA('','Image','https://ashshakurcharity.org/Assets/hotmeal/main.jpg');

    STOREDATA('','Title','Every child deserves a full plate');

    STOREDATA('','Story',`<p class='LeftText'>Peoples lives are in grave risk as a result of food shortage and poverty, especially in those who are occupied in areas of large populations while others are forced to eat grass and others starve to death. Malnutrition makes differnt individuals more pronr to illness and less able to recover from accidents, which creates a circle of mortality that seems to never end.
    <br><br>
    We as a team having realised this as a difficulty we come to provide a meal to those who can not have two meals a day to ensure they have somthing in their stomachs to keep smiling faces as well as saving lives with your geneous donations.</p>
    <br><br>
    <h1>Together we can save humanity.</h1>`);

    STOREDATA('','ProjectName','Hot Meal');

    STOREDATA('','SubTitle','He is not a believer whose stomach is filled while the neighbour to his side goes hungry.');

    ROUTE(' ',SINGLEPROJECTPAGE,'HOMEPAGE');
    
};

const FOODPACK=()=>{

    STOREDATA('','ScrollPoint','FoodPackSection');

    STOREDATA('','Image','https://ashshakurcharity.org/Assets/hotmeal/main.jpg');

    STOREDATA('','Title','Distributing food packs to combat hunger to the to most needy families and vulnerable communities');

    STOREDATA('','Story',`<p class='LeftText'>Contribute towards providing a vulnerable family foodpack to support a needy family with food every month for a halt year.
    <br><br>
    Over 733million people are unciernourished worldwide, with one in eleven facing the reality of extreme hunger and poverty!
    <br><br>
    Here at Ash shakur Charity and Orphanage Aid, We believe that no one should go hungry thats we are on a mission to feed our world withyour support, we have fed a mast of the vulnerable people in some of most poverty sticken areas.
    <br><br>
    As we relish the mast nutrious foods on our tables,due gratitude to Allah, we must externd far beyond thanking Him, we must ensure that all His creations are well fed too as stated in surah Al-Insan(76:8),The rightious are those who give food motivated solely by their love for Allah"SWT, to the poor, the orphans and the captive seeking His pleasure alone without expectation of reward or thanks"
    <br>
    Let us embrace the opportunity to please Allah(SWT) by extending our hands in charity and support those in need. By participating in hunger relief efforts, we not only fulfill oour religiousduty but also demonstrate compassion and solidarity with our brothers and sisters facing food insecurity.</p>`);

    STOREDATA('','ProjectName','Food Pack');

    STOREDATA('','SubTitle','Prophet Muhammad said;\'If a muslim feeds a hungry ,Allah will feed him with the fruits of paradise on the day of Judgement');

    ROUTE(' ',SINGLEPROJECTPAGE,'HOMEPAGE');
    
};

const QURANDISTRIBUTION=()=>{

    STOREDATA('','ScrollPoint','QuranSection');

    STOREDATA('','Image','https://ashshakurcharity.org/Assets/hotmeal/main.jpg');

    STOREDATA('','Title','Sharing Quran is swadaqatul-jariya in which whoever gives one receives a reward from whenever someone recites it.');

    STOREDATA('','Story',`<p class='LeftText'>Whoever recites a letter from the Quran receives the reward of a good deed and each good deed is worth ten goods and therefore it is a sadaqah jariyah for the donator that he/she receives rewards too whenever the same Quran donated is recited.Quran distribution is at the heart of our charity's mission. As muslims muslims, that sharing the Quran is one of the most valuable and rewarding acts of worship. we distribute copies of Quran to different madrasa Schools and mosques where they are limited.This enables every individual to accesss the message from Allah to human .<p>`);

    STOREDATA('','ProjectName','Quran Distribution');

    STOREDATA('','SubTitle','Share swadaqatul jariyah');

    ROUTE(' ',SINGLEPROJECTPAGE,'HOMEPAGE');
    
};

const MENUOPEN=()=>{

    var MENU=NAMING('#MenuOpen');

    var MENUCLOSER=NAMING('#MenuClose');

    var MENUDRAWER=NAMING('#Menu');

    var SCROLLHOME=NAMING('#HomeScroll');

    CLICK(MENU,()=>{

        STYLED(MENUDRAWER,'display','inline-flex');

        STYLED(MENUCLOSER,'display','block');

        STYLED(MENU,'display','none');

        STYLED(SCROLLHOME,'top','200px');

    });

};

const MENUCLOSE=()=>{

    var MENU=NAMING('#MenuOpen');

    var MENUCLOSER=NAMING('#MenuClose');

    var MENUDRAWER=NAMING('#Menu');

    var SCROLLHOME=NAMING('#HomeScroll');

    CLICK(MENUCLOSER,()=>{

        STYLED(MENUDRAWER,'display','none');

        STYLED(MENUCLOSER,'display','none');

        STYLED(MENU,'display','block');

        STYLED(SCROLLHOME,'top','150px');

    });
 
};

const POWERUS=()=>{

    WEBSITE('https://eroinnovations.site');

};

const CONTACTUSPAGEROUTER=()=>{

    ROUTE(' ',CONTACTUSPAGE,'HOMEPAGE');

};

const CONTACTUSPAGE=()=>{

    DELETEDATA('','ScrollPoint');

    DISPLAY('',`

        <header>

            <div id='HeaderHolder' class='TopNav'>

                <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
                <h1 class='CompanyName'>Ash Shakur Charity and Orphanage Aid</h1>

                <p class='Motto'>"Helping the poor orphans and the needy people"</p>

                <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEPHONEICON}"/>

            </div>

            <div id='DonateSection' class='TopNav'>

                <h1 class='DonateWord'>Donate</h1>
            
            </div>

        </header>

        <div class='ScrollDiv'>

            <br>

            <h1>Fill the Form Below</h1>

            <br>

            <input class='RoundInput' placeholder='Enter Your Name'/>

            <input class='RoundInput' placeholder='Enter Your Email'/>

            <textarea placeholder='Compose Your Message'></textarea>

            <button class='SendButton'>Send Message</button>

            <br><br>

            <h3>OR</h3>

            <br>

            <div id='ContactHolder' class='TopNav'>

                <img class='Icon' src='${WHITEINSTAGRAMICON}' onclick='INSTAGRAMUS()' />

                <img class='Icon' src='${WHITEWHATSAPPICON}' onclick='WHATSAPPUS()' />

                <img class='Icon' src='${WHITEFACEBOOKICON}' onclick='FACEBOOKUS()' />

                <img class='Icon' src='${WHITEGMAILICON}' onclick='EMAILUS()'/>
            
            </div>

            <br><br>

            <p class='PoweringCompany' onclick='POWERUS()'>Powered by Elite Robust Ontology</p>

            <br>

        </div>

    `);

};

const CALLUS=()=>{

    CALL('+256705665894');

};

const EMAILUS=()=>{

    GMAIL('ashshakurcharityandorphanageai@gmail.com');

};

const WHATSAPPUS=()=>{

    WEBSITE('https://wa.me/256789467876');

};

const INSTAGRAMUS=()=>{

    WEBSITE('https://www.instagram.com/ash_shakur_charity_?igsh=ZXlrMmNqc3poYTh6');

};

const FACEBOOKUS=()=>{

    WEBSITE('https://www.facebook.com/profile.php?id=100080811854731&mibextid=ZbWKwL');

};

const SINGLEPROJECTPAGE=(Name,Story,Image,)=>{

    DISPLAY('',`

        <header>

            <div id='HeaderHolder' class='TopNav'>

                <img  class='LeftIcon' src='${WHITEBACKICON}'/>
        
                <h1 class='CompanyName'>Ash Shakur Charity and Orphanage Aid</h1>

                <p class='Motto'>"Helping the poor orphans and the needy people"</p>

                <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEPHONEICON}"/>

            </div>

            <div id='DonateSection' class='TopNav'>

                <h1 class='DonateWord'>Donate</h1>
            
            </div>

        </header>

        <div class='ScrollDiv'>

            <br>

            <h1>${sessionStorage.getItem('ProjectName')}</h1>

            <br>

            <div id='BorderButton' class='SlideDiv'>

                <br>

                <img id='MidImage' class='QurabanImage' src='${sessionStorage.getItem('Image')}'/>

                <br><br>

                <h3>${sessionStorage.getItem('Title')}</h3>

                <br><br>

                <button class='SmallDonate'>Donate</button>
            
            </div>

            <br>

            <h1>${sessionStorage.getItem('SubTitle')}</h1>

            <br>

            <p id='QuraBanMessage' class='CenterText'>${sessionStorage.getItem('Story')}</p>

            <br>

            <div id='ContactHolder' class='TopNav'>

                <img class='Icon' src='${WHITEINSTAGRAMICON}' onclick='INSTAGRAMUS()' />

                <img class='Icon' src='${WHITEWHATSAPPICON}' onclick='WHATSAPPUS()' />

                <img class='Icon' src='${WHITEFACEBOOKICON}' onclick='FACEBOOKUS()' />

                <img class='Icon' src='${WHITEGMAILICON}' onclick='EMAILUS()'/>
            
            </div>

            <br><br>

        </div>

    `);

    var BACK=NAMING('.LeftIcon');

    CLICK(BACK,()=>{

        CONDITION(sessionStorage.getItem('PreviousPage') === 'PROJECTPAGE',()=>{

            PROJECTPAGEROUTER();

        },()=>{

            HOMEPAGEROUTER();

        });

    });

};

const PROJECTPAGEROUTER=()=>{

    DELETEDATA('','ScrollPoint');

    ROUTE(' ',PROJECTPAGE,'HOMEPAGE');

};

const PROJECTPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    const PROJECTAPI='https://docs.google.com/spreadsheets/d/1x_Nruw60vwcWJKkMUWpNncGzQSoPgHoMP2X8so3eS8I/edit?usp=sharing';

    DISPLAY('',`

        <header>

            <div id='HeaderHolder' class='TopNav'>

                <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
                <h1 class='CompanyName'>Ash Shakur Charity and Orphanage Aid</h1>

                <p class='Motto'>"Helping the poor orphans and the needy people"</p>

                <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEPHONEICON}"/>

            </div>

            <div id='DonateSection' class='TopNav'>

                <h1 class='DonateWord'>Donate</h1>
            
            </div>

        </header>

        <div class='ScrollDiv'>

            <p>...Please Wait...</p>

        </div>

    `);

    var HOMEDIV=NAMING('.ScrollDiv');

    GETDATA(PROJECTAPI,'Projects',(data)=>{

        DISPLAY(HOMEDIV,'');
    
        REDUX(data,(datata)=>{
    
            CREATEELEMENT(HOMEDIV,'div','IbraProject',(ELEMENT)=>{
    
                DISPLAY(ELEMENT,`
    
                    <img class='ProjectImage' src='${datata.Image}'/>
    
                    <footer id='ProjectFooter' class='MainFooter'>
    
                        <p class='Message'>${datata.Name}</p>
                
                    </footer>
                    
                `);
    
                CLICK(ELEMENT,()=>{
    
                    STOREDATA('','ProjectName',datata.Name);
    
                    STOREDATA('','Image',datata.Image);
    
                    STOREDATA('','Title',datata.Header);
    
                    STOREDATA('','SubTitle',datata.SubTitle);
    
                    STOREDATA('','Story',datata.Story);
    
                    ROUTE(' ',SINGLEPROJECTPAGE,'PROJECTPAGE');
    
                });
    
            });
    
        });

    },(data)=>{

        console.log(data);

    });

};

const ABOUTUSPAGEROUTER=()=>{

    DELETEDATA('','ScrollPoint');

    ROUTE(' ',ABOUTUSPAGE,'HOMEPAGE');

};

const ABOUTUSPAGE=()=>{

    DISPLAY('',`

        <header>

            <div id='HeaderHolder' class='TopNav'>

                <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
                <h1 class='CompanyName'>Ash Shakur Charity and Orphanage Aid</h1>

                <p class='Motto'>"Helping the poor orphans and the needy people"</p>

                <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEPHONEICON}"/>

            </div>

            <div id='DonateSection' class='TopNav'>

                <h1 class='DonateWord'>Donate</h1>
            
            </div>

        </header>

        <div class='ScrollDiv'>

            <br>

            <h1 class='AboutUsTitle'>Help to give Hope</h1>

            <br>

            <p class='LeftText'>Ash Shakur Charity and Orphanage Aid, founded by thr local community in Uganda, was established to address the pressing economic challenges and natural calamities affecting vulnerable populations. Our mission is to eradicate poverty and uplift weak communities through a variety of impactful initiatives.

            <br><br>

            These include farming, animal rearing, emergency relief, food aid, water and sanitation projects, Ramadan programs, Qurban and Aqeeqa programs. We also focus on construction, Education, Healthcare, Human rights Adocancy and orphan care. Join us in making a difference.</p>

            <br>

            <h1 class='AboutUsTitle'>Mission</h1>

            <br>

            <p class='LeftText'>To alleviate poverty and improve the quality of life for vulnerable populations in Uganda and engaging the local communities. We strive to bring lasting change and hope to those in need.</p>

            <br>

            <p class='LeftText'>To work toward s topping the policies and activities of persecuting and disctriminating against people in order to prevent violations of their basic rights and freedom</p>

            <br>

            <h1 class='AboutUsTitle'>Vision</h1>

            <br>

            <p class='LeftText'>To create a self reliant and empowered community in Uganda, free from poverty and suffering, where every individual has access to basic needs, Education and oppotunities for a dignified life.</p>

            <br>

            <p class='LeftText'>To get help to the areas in difficulties and provide permanent solutions through permanent projects.</p>

            <br>

            <h1 class='AboutUsTitle'>Find Us Here</h1>

            <br>

            <div id='ContactHolder' class='TopNav'>

                <img class='Icon' src='${WHITEINSTAGRAMICON}' onclick='INSTAGRAMUS()' />

                <img class='Icon' src='${WHITEWHATSAPPICON}' onclick='WHATSAPPUS()' />

                <img class='Icon' src='${WHITEFACEBOOKICON}' onclick='FACEBOOKUS()' />

                <img class='Icon' src='${WHITEGMAILICON}' onclick='EMAILUS()'/>
            
            </div>

            <br><br>

        </div>

    `);

};