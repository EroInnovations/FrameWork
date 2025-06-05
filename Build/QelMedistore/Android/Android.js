const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

    DATADOWNLOADING();

    if (localStorage.getItem('User')) {

        USERCONNECTION();
        
    };

    if (!navigator.onLine) {

        TOAST('Your Offline,Please Check Your Internet Connection')
        
    };

};

const USERCONNECTION=(callback)=>{

    GETDATA(API,'Users',(data)=>{

        FINDER(data,'ID',localStorage.getItem('User'),(MyData)=>{

            if (MyData.ID === localStorage.getItem('User')&&!MyData.Deleted) {

                JSONIFICATION(MyData,(Uses)=>{

                    STOREDATA(' ','UserData',Uses);

                    STOREDATA(' ','Area',MyData.Location);

                    STOREDATA(' ','SavedData',MyData.SavedItems);

                    callback();

                });
                
            } else {

                DELETEDATA(' ','UserData');

                DELETEDATA(' ','User');
                
            };

        });

    });

}

const DATADOWNLOADING=()=>{

    DOWNLOADSAVEINDEX(API,'Products','Products',()=>{

        HOMEPAGE();

    });

    DOWNLOADSAVEINDEX(API,'Catergory','Catergory',()=>{

    });

    DOWNLOADSAVEINDEX(API,'Policies','Policies',()=>{

    });

};

const HOMEPAGEROUTE=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const SECTIONSPAGEROUTE=()=>{

    ROUTE(' ',SECTIONSPAGE,'HOMEPAGE');

};

const SAVEDPAGEROUTE=()=>{

    if (localStorage.getItem('UserData')) {

        ROUTE(' ',SAVEDPAGE,'HOMEPAGE');
        
    } else {

        ACCOUNTPAGEROUTE();
        
    };

};

const SETTINGSPAGEROUTE=()=>{

    ROUTE(' ',SETTINGSPAGE,'HOMEPAGE');

};

const USERACCOUNTPAGEROUTE=()=>{

    ROUTE(' ',USERACCOUNTPAGE,'HOMEPAGE');

};

const SHOPPINGPAGEROUTE=()=>{

    if (localStorage.getItem('UserData')) {
        
        ROUTE(' ',SHOPPAGE,'HOMEPAGE');

    } else {
        
        ACCOUNTPAGEROUTE();

    };

};

const APPPREFERNCEPAGEROUTE=()=>{

    ROUTE(' ',APPPREFERENCEPAGE,'HOMEPAGE');

};

const PRODUCTDETAILSPAGEROUTE=()=>{

    ROUTE(' ',PRODUCTSDETAILSPAGE,'HOMEPAGE');

};

const ALLPRODUCTPAGEROUTE=()=>{

    ROUTE('',ALLPRODUCTPAGE,'SECTIONSPAGE');

};

const ACCOUNTPAGEROUTE=()=>{

    ROUTE('',ACCOUNTPAGE,'PRODUCTSDETAILSPAGE');

};

const PROFILEUSERROUTER=()=>{

    if (localStorage.getItem('UserData')) {

        ROUTE('',PROFILEPAGE,'USERACCOUNTPAGE');
        
    } else {


        ACCOUNTPAGEROUTE();
        
    };

};

const PRODUCTPAGEROUTER=()=>{

    ROUTE('',PRODUCTPAGE,'HOMEPAGE');

};

const CONTACTUSPAGEROUTER=()=>{

    ROUTE('',CONTACTUSPAGE,'HOMEPAGE');

};

const HELPAGEROUTER=()=>{

    ROUTE('',HELPPAGE,'HOMEPAGE');

};

const DELETEACCOUNTROUTER=()=>{

    ROUTE('',DELETEACCOUNTPAGE,'HOMEPAGE');

};

const UPDATEPROFILEPHOTOTACCOUNTROUTER=()=>{

    ROUTE('',PROFILEPHOTOPAGE,'HOMEPAGE');

};

const UPDATEPROFILEDETAILSACCOUNTROUTER=()=>{

    ROUTE('',PROFILEDETAILSPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    if (!localStorage.getItem('SavedData')) {

        JSONADDER(localStorage.getItem('SavedData'),['17ea81ea-b4fa-4b7a-8f3e-10ef438b880f'],(Mydata)=>{

            STOREDATA(' ','SavedData',Mydata);

        });
        
    }
    if (!localStorage.getItem('ShopData')) {

        JSONADDER(localStorage.getItem('SavedData'),['17ea81ea-b4fa-4b7a-8f3e-10ef438b880f'],(Mydata)=>{

            STOREDATA(' ','ShopData',Mydata);

        });
        
    };

    if (!localStorage.getItem('RatedData')) {

        JSONADDER(localStorage.getItem('RatedData'),['17ea81ea-b4fa-4b7a-8f3e-10ef438b880f'],(Mydata)=>{

            STOREDATA(' ','RatedData',Mydata);

        });
        
    };

    if (!localStorage.getItem('Area')) {

        localStorage.setItem('Area','Kampala');
        
    };

    DISPLAY('',`

        <div class='HomeHolderDiv'>

            <div class='TopNav'>

                <div class='ImageTextHolderSlide' onclick='LOCATIONPAGEROUTE()'>

                    <img src='${WHITELOCATIONICON}'/>

                    <p>${localStorage.getItem('Area')||'Kampala'}</p>
                
                </div>

                <div class='ImageTextHolderSlider' onclick='USERACCOUNTPAGEROUTE()'>

                    <img src='${WHITEUSERPROFILEICON}'/>

                    <p>User</p>
                
                </div>
            
            </div>

            <div class='TopNav'>

                <input class='SearchInput' type='Search' placeholder='Search For Items' />

                <button class='SearchFilterButton' onclick='APPPREFERNCEPAGEROUTE()'>

                    <img class='FilterIcon' src='${WHITESETTINGSSLIDERICON}'/>
                
                </button>

            </div>

            <div class='SearchDataDiv'></div> 

            <div class='TopNav'>

                <h1 class='Catergories'>Products</h1>

                <div class='ImageTextHolderSlidered' onclick='PRODUCTPAGEROUTER()'>

                    <p class='SeeAllName'>See All</p>

                    <img class='SeeAllImages' src='${WHITENEXTICON}'/>

                </div>
                
            </div>

            <div class='AdSection' id='CatergoryDiv'>

                <button class='SectionedButtons' onclick='TRENDINGDITEMS()' >

                    <img src='${WHITETRENDINGTOPICSICON}'/>

                    <p>Trending</p>
                
                </button>

                <button class='SectionedButtons' onclick='RATEDITEMS()'>

                    <img src='${WHITEUNHEARTICON}'/>

                    <p>Rated</p>
                
                </button>

                <button class='SectionedButtons' onclick='BOUGHTITEMS()'>

                    <img src='${WHITESUBSCRIPTIONICON}'/>

                    <p>Bought Items</p>
                
                </button>

                <button class='SectionedButtons' onclick='HOMEPAGE()'>

                    <img src='${WHITESUBSCRIPTIONICON}'/>

                    <p>All Items</p>
                
                </button>
            
            </div>

            <h1 class='OurProducts'>Our Products</h1>

            <div class='AllProducts' id='SpecialProducts'>
            
                <div id='Lod' class="loader">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>

            </div>

            <br><br><br>
            
        </div>

        <footer class='HomeFooter'>

            <div class='ImageTextHolder' onclick='SECTIONSPAGEROUTE()'>

                <img class='FooterImage' src='${WHITEGRIDICON}'/>

                <p>Sections</p>

                <div class='NoteSaved'></div>
            
            </div>

            <div class='ImageTextHolder' onclick='SAVEDPAGEROUTE()'>

                <img class='FooterImage' src='${WHITESAVEDICON}'/>

                <p>Saved</p>

                <div id='SavedNotes' class='NoteSaved'></div>
            
            </div>

            <div class='ImageTextHolder' onclick='SHOPPINGPAGEROUTE()'>

                <img class='FooterImage' src='${WHITESHOPPINGCART}'/>

                <p>Shop</p>

                <div id='ShopNotes' class='NoteSaved'></div>
            
            </div>

            <div class='ImageTextHolder' onclick='SETTINGSPAGEROUTE()'>

                <img class='FooterImage' src='${WHITESETTINGSICON}'/>

                <p>Settings</p>

                <div class='NoteSaved'></div>
            
            </div>
        
        </footer>
        
    `);

    if (localStorage.getItem('UserData')) {

        SAVEDNOTES();

        SHOPNOTES();
        
    }

    const SearchInput=document.querySelector('.SearchInput');

    const SearchDataDiv=document.querySelector('.SearchDataDiv');

    const AllProducts=document.querySelector('.AllProducts');

    SearchInput.addEventListener('input',()=>{

       SEARCHACTION(SearchDataDiv,SearchInput);

    });

    SearchInput.addEventListener('focus',()=>{

        STYLED(SearchDataDiv,'display','block');

    });

    const Lod=document.querySelector('#Lod');

    GETINDEXEDDATA('Products','Products',(element)=>{

        STYLED(Lod,'display','none');

        CREATEELEMENT(AllProducts,'div','SectionDivso',(ELEMENTS)=>{

            if (localStorage.getItem('ConvertedPrice')) {

                DOLLAREXCHANGE('USD',element.ProductPrice,(data)=>{

                    DISPLAY(ELEMENTS,`

                        <img class='ProductImage'src='${element.ProductImage}'/>

                        <footer class='SectionFooters'>

                            <p class='ProductNamer'>${element.ProductName}</p>

                            <h1 class='ProductPrice'>Price:${data}USD</1>
                        
                        </footer

                    `);   

                });
                
            } else {

                DISPLAY(ELEMENTS,`

                    <img class='ProductImage'src='${element.ProductImage}'/>

                    <footer class='SectionFooters'>

                        <p class='ProductNamer'>${element.ProductName}</p>

                        <h1 class='ProductPrice'>Price:${element.ProductPrice.toLocaleString()}UGX</1>
                    
                    </footer

                `);
            
            };

            CLICK(ELEMENTS,()=>{

                JSONIFICATION(element,(MyElement)=>{

                    STOREDATA('','CurrentProducts',MyElement);

                    PRODUCTDETAILSPAGEROUTE();

                });
                
            });

        });

    });
    
    DATADOWNLOADING();

    USERCONNECTION();

};

const SAVEDNOTES=()=>{

    const SavedNotes=document.querySelector('#SavedNotes');

    LOCALDEJSONDATA('SavedData',(element)=>{

        if (element.length !=0 && element !='17ea81ea-b4fa-4b7a-8f3e-10ef438b880f' ) {

            STYLED(SavedNotes,'display','inline-flex');

            DISPLAY(SavedNotes,`<p>${element.length-1}</p>`);

        };

    });

};

const SHOPNOTES=()=>{

    const SavedNotes=document.querySelector('#ShopNotes');

    LOCALDEJSONDATA('ShopData',(element)=>{

        if (element.length !=0 && element !='17ea81ea-b4fa-4b7a-8f3e-10ef438b880f' ) {

            STYLED(SavedNotes,'display','inline-flex');

            DISPLAY(SavedNotes,`<p>${element.length-1}</p>`);

        };

    });

};

const SEARCHACTION = (SearchDataDiv, SearchInput) => {
    const searchTerm = SearchInput.value.trim().toLowerCase();

    if (!searchTerm) {
        STYLED(SearchDataDiv, 'display', 'none');
        CLEAR(SearchDataDiv);
        return;
    }

    STYLED(SearchDataDiv, 'display', 'block');
    CLEAR(SearchDataDiv);

    let found = false;

    GETINDEXEDDATA('Products', 'Products', (element) => {
        if (element.ProductName.toLowerCase().includes(searchTerm)) {
            found = true;

            CREATEELEMENT(SearchDataDiv, 'div', 'SectionDivs', (ELEMENTS) => {
                DISPLAY(ELEMENTS, `
                    <img class='ProductImage' src='${element.ProductImage}' />
                    <footer class='SectionFooter'>
                        <p class='ProductName'>${element.ProductName}</p>
                    </footer>
                `);

                CLICK(ELEMENTS, () => {
                    JSONIFICATION(element, (MyElement) => {
                        STOREDATA('', 'CurrentProducts', MyElement);

                        // Ensure this function navigates correctly
                        if (typeof PRODUCTDETAILSPAGEROUTE === 'function') {
                            PRODUCTDETAILSPAGEROUTE();
                        } else {
                            console.error('PRODUCTDETAILSPAGEROUTE is not defined');
                        }
                    });
                });
            });
        }
    }, () => {
        if (!found) {
            DISPLAY(SearchDataDiv, '<p class="NoMessage">No Item Found with That Name.</p>');
        }
    });
};

const SINGLEDISPLAY=(ELEMENTS,DATABASE,Stored,callback)=>{

    GETINDEXEDDATA(DATABASE,DATABASE,(element)=>{

        CLEAR(ELEMENTS);

        CREATEELEMENT(ELEMENTS,'div','SingleCatergorye',(ELEMENTS)=>{

            DISPLAY(ELEMENTS,`

                <img class='ProductImager' src='${element.ProductImage}'/>

            `);

            CLICK(ELEMENTS,()=>{

                STOREDATA(' ',Stored,element.District);

                callback();

            });

        });

    });

}

const LOCATIONPAGEROUTE=()=>{

    ROUTE(' ',LOCATIONPAGE,'HOMEPAGE');

};

const LOCATIONPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Districts</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

    const CountryDiv=document.querySelector('.CountryDiv');

    REDUX(UGANDANDISTRICITS,(element)=>{

        CREATEELEMENT(CountryDiv,'div','CountryDivs',(ELEMENTS)=>{

            DISPLAY(ELEMENTS,`

                <p class='LeftDistrict'>${element.District}</p>

                <img class='RightDistricitImage'src='${WHITELOCATIONICON}'/>

            `);

            CLICK(ELEMENTS,()=>{

                STOREDATA(' ','Area',element.District);

                if (navigator.onLine) {

                    if (localStorage.getItem('UserData')) {
                        
                        GETDATA(API,'Users',(data)=>{
            
                            FINDER(data,'ID',localStorage.getItem('User'),(User)=>{
            
                                if (User.ID === localStorage.getItem('User')) {
            
                                    const INFO=[User.UserName,User.UserEmail,User.UserPassword,User.Date,User.Deleted,User.Photo,User.Activity,element.District,User.Device,User.SavedItems,User.Settings,User.Notifications,User.Updates,User.Versions,User.BoughtProducts,User.ShoppedProducts]
            
                                        UPDATEDATA(API,'Users',User.ID,INFO,(Reason)=>{
            
                                            USERCONNECTION(()=>{
            
                                            });
            
                                        },(error)=>{
            
                                        TOAST('Failed to Update User Data');
            
                                    });
                                                
                                } 
            
                            });
            
                        });
                    };
                
                };

                HOMEPAGEROUTE();

            });

        });

    });

};

const SHOPPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Shop</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>

        <footer>

            <button class='BuyButtons'>

                <p class='Total'>Calculating...</p>
                    
            </button>

            <button id='Shop'  class='BuyButtons' >

                <p class='Shopped'>Pay Now</p>
                    
            </button>
                
        </footer>
        
    `);

    const AllProducts = document.querySelector('.CountryDiv');

    const Total=document.querySelector('.Total');

    LOCALDEJSONDATA('ShopData', (data) => {
        AllProducts.innerHTML = '';

        if (data.length !== 0) {
            const matchedProducts = [];

            GETINDEXEDDATA('Products', 'Products', (element) => {
                CHECKER(data.includes(element.ID), () => {
                    matchedProducts.push(element); // Collect matched elements

                    // After collecting, you might want to delay this or move it outside
                    const total = matchedProducts.reduce((sum, item) => sum + item.ProductPrice, 0);
                    
                    
                    if (localStorage.getItem('ConvertedPrice')) {
                        
                        DOLLAREXCHANGE('USD',total,(data)=>{

                            Total.innerHTML='USD '+data;

                        })

                    } else {
                        
                        Total.innerHTML='UGX '+total;

                    }

                    
                    // Render each matched element
                    CREATEELEMENT(AllProducts, 'div', 'SectionDivso', (ELEMENTS) => {
                        const showPrice = (priceDisplay) => {
                            DISPLAY(ELEMENTS, `
                                <img class='ProductImage' src='${element.ProductImage}'/>
                                <footer class='SectionFooters'>
                                    <p class='ProductNamer'>${element.ProductName}</p>
                                    <h1 class='ProductPrice'>Price: ${priceDisplay}</h1>
                                </footer>
                            `);
                        };

                        if (localStorage.getItem('ConvertedPrice')) {
                            DOLLAREXCHANGE('USD', element.ProductPrice, (convertedPrice) => {
                                showPrice(`${convertedPrice} USD`);
                            });
                        } else {
                            showPrice(`${element.ProductPrice.toLocaleString()} UGX`);
                        }

                        CLICK(ELEMENTS, () => {
                            JSONIFICATION(element, (MyElement) => {
                                STOREDATA('', 'CurrentProducts', MyElement);
                                PRODUCTDETAILSPAGEROUTE();
                            });
                        });
                    });
                });
            });
        } else {
            AllProducts.innerHTML = 'No Items Saved!';
        }
    });

};

const SECTIONSPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Sections</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

    const CountryDiv=document.querySelector('.CountryDiv');

    GETINDEXEDDATA('Catergory','Catergory',(element)=>{

        console.log(element)

        CREATEELEMENT(CountryDiv,'div','SectionDivs',(ELEMENTS)=>{

            DISPLAY(ELEMENTS,`

                <img class='ProductImage'src='${element.ProductImage}'/>

                <footer class='SectionFooter'>

                    <p class='ProductName'>${element.ProductName}</p>
                
                </footer

            `);

            CLICK(ELEMENTS,()=>{
                
                STOREDATA('','Sections',element.ID);

                STOREDATA('','SectionName',element.ProductName);

                ALLPRODUCTPAGEROUTE();
                
            });

        });

    });

};

const ALLPRODUCTPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div id='SectionNames' class='ImageTextHolderSlider'>

                <p class='SectionNamer' >${sessionStorage.getItem('SectionName')}</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

    const AllProducts=document.querySelector('.CountryDiv');

    GETINDEXEDDATA('Products','Products',(element)=>{

        CHECKER(element.ProductCatergory === sessionStorage.getItem('Sections'),()=>{

            CREATEELEMENT(AllProducts,'div','SectionDivso',(ELEMENTS)=>{

                if (localStorage.getItem('ConvertedPrice')) {

                    DOLLAREXCHANGE('USD',element.ProductPrice,(data)=>{

                        DISPLAY(ELEMENTS,`

                            <img class='ProductImage'src='${element.ProductImage}'/>

                            <footer class='SectionFooters'>

                                <p class='ProductNamer'>${element.ProductName}</p>

                                <h1 class='ProductPrice'>Price:${data}USD</1>
                            
                            </footer

                        `);   

                    });
                    
                } else {

                    DISPLAY(ELEMENTS,`

                        <img class='ProductImage'src='${element.ProductImage}'/>

                        <footer class='SectionFooters'>

                            <p class='ProductNamer'>${element.ProductName}</p>

                            <h1 class='ProductPrice'>Price:${element.ProductPrice.toLocaleString()}UGX</1>
                        
                        </footer

                    `);
                
                };

                CLICK(ELEMENTS,()=>{

                    JSONIFICATION(element,(MyElement)=>{

                        STOREDATA('','CurrentProducts',MyElement);

                        PRODUCTDETAILSPAGEROUTE();

                    });
                    
                });

            });

        });

    });

};

const SAVEDPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Saved</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

    const AllProducts=document.querySelector('.CountryDiv');

    LOCALDEJSONDATA('SavedData',(data)=>{

        AllProducts.innerHTML='';

        if (data.length != 0 ) {

            GETINDEXEDDATA('Products','Products',(element)=>{

                CHECKER(data.includes(element.ID),()=>{

                    CREATEELEMENT(AllProducts,'div','SectionDivso',(ELEMENTS)=>{

                        if (localStorage.getItem('ConvertedPrice')) {

                            DOLLAREXCHANGE('USD',element.ProductPrice,(data)=>{

                                DISPLAY(ELEMENTS,`

                                    <img class='ProductImage'src='${element.ProductImage}'/>

                                    <footer class='SectionFooters'>

                                        <p class='ProductNamer'>${element.ProductName}</p>

                                        <h1 class='ProductPrice'>Price:${data}USD</1>
                                        
                                    </footer

                                `);   

                            });
                                
                        } else {

                            DISPLAY(ELEMENTS,`

                                <img class='ProductImage'src='${element.ProductImage}'/>

                                <footer class='SectionFooters'>

                                    <p class='ProductNamer'>${element.ProductName}</p>

                                    <h1 class='ProductPrice'>Price:${element.ProductPrice.toLocaleString()}UGX</1>
                                    
                                </footer

                            `);
                            
                        };

                        CLICK(ELEMENTS,()=>{

                            JSONIFICATION(element,(MyElement)=>{

                                STOREDATA('','CurrentProducts',MyElement);

                                PRODUCTDETAILSPAGEROUTE();

                            });
                                
                        });

                    });
                        
                });

            });
                
        } else {

            AllProducts.innerHTML='No Items Saved!'
                
        };

    });
};

const CHANGECOLOR=()=>{

}

const SETTINGSPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Preferences</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'>

            <button class='CountryDivs' onclick='POLICYPAGEROUTER()'>

                <p class='LeftDistrict'>Privacy Policy</p>

                <img class='RightDistricitImage'src='${WHITEPRIVACYPOLICYICON}'/>
            
            </button>

            <button class='CountryDivs' onclick='RELOAD()'>

                <p class='LeftDistrict'>Sync</p>

                <img class='RightDistricitImage'src='${WHITERETRYICON}'/>
            
            </button>

            <button class='CountryDivs' onclick='APPUPDATES()'>

                <p class='LeftDistrict'>Updates</p>

                <img class='RightDistricitImage'src='${WHITEMOBILEDEVELOPMENTICON}'/>
            
            </button>

        </div>
        
    `);

};

const USERACCOUNTPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Profile</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'>

            <button class='CountryDivs' onclick='PROFILEUSERROUTER()'>

                <p class='LeftDistrict'>My Profile</p>

                <img class='RightDistricitImage'src='${WHITEUSERPROFILEICON}'/>
            
            </button>

            <button class='CountryDivs' onclick='HELPAGEROUTER()'>

                <p class='LeftDistrict'>Help</p>

                <img class='RightDistricitImage'src='${WHITEHELPICON}'/>
            
            </button>

            <button class='CountryDivs' onclick='CONTACTUSPAGEROUTER()'>

                <p class='LeftDistrict'>Contact Us</p>

                <img class='RightDistricitImage'src='${WHITEPHONEICON}'/>
            
            </button>

            <button class='CountryDivs' onclick='DELETEACCOUNTROUTER()'>

                <p class='LeftDistrict'>Delete Account</p>

                <img class='RightDistricitImage'src='${WHITEDELETEICON}'/>
            
            </button>

            <button class='CountryDivs' onclick='LOGOUT()'>

                <p class='LeftDistrict'>Log Out</p>

                <img class='RightDistricitImage'src='${WHITELOGOUTICON}'/>
            
            </button>
        
        </div>
        
    `);

};

const APPPREFERENCEPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Filters</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'>

            <button class='CountryDivs' onclick='CONVERT()'>

                <p class='LeftDistrict'>Convert Currency</p>

                <img class='RightDistricitImage'src='${WHITESUBSCRIPTIONICON}'/>
            
            </button>

        </div> 
        
    `);

};

const CONVERT=()=>{

    if (localStorage.getItem('ConvertedPrice')) {

        DELETEDATA(' ','ConvertedPrice');

        RELOAD();
        
    } else {

        STOREDATA(' ','ConvertedPrice','Approved');

        RELOAD();
        
    };

};

const PRODUCTSDETAILSPAGE=()=>{

    SESSIONDEJSONDATA('CurrentProducts',(data)=>{

        DISPLAY('',`

            <header>

                <div class='ImageTextHolderSlided' onclick='SECTIONSPAGEROUTE()'>

                    <img src='${WHITESINGLEBACKICON}'/>

                    <p>Back</p>
                    
                </div>

                <div class='ImageTextHolderSlider'>

                    <p>Details</p>
                    
                </div>
            
            </header>

            <div class='CountryDiv'>

                <img class='ProductedImage' src='${data.ProductImage}'/>

                <h1 class='ProductedName'>${data.ProductName}</h1>

                <div class='AdSection' ><p>${data.ProductDetails}</p></div>

                <div class='TopNav'>

                    <div class='ImageTextHolder' onclick=''>

                        <img class='FooterImage' src='${WHITECHATICON}'/>

                        <p>Comment</p>
                    
                    </div>

                    <div class='ImageTextHolder' onclick='SAVEITEM()'>

                        <img class='FooterImage' id='SavedItems' src='${WHITESAVEICON}'/>

                        <p class='SavedText'>Save</p>
                    
                    </div>

                    <div class='ImageTextHolder' onclick='RATEITEM()'>

                        <img id='RatedIcon' class='FooterImage' src='${WHITEUNHEARTICON}'/>

                        <p class='Rated'>Rate</p>
                    
                    </div>

                    <div class='ImageTextHolder' onclick=''>

                        <img class='FooterImage' src='${WHITESENDICON}'/>

                        <p>Share</p>
                    
                    </div>
                
                </div>

                <footer>

                    <button class='BuyButtons' onclick='BUYNOW()'>

                        <p>Buy Now</p>
                    
                    </button>

                    <button id='Shop'  class='BuyButtons' onclick='SHOPITEM()' >

                        <p class='Shopped'>Shop</p>
                    
                    </button>
                
                </footer>
            
            </div> 
            
        `);

    });

    SAVEDITEMDISPLAY();

    SHOPITEMDISPLAY();

    RATEDITEMDISPLAY();

};

const BUYNOW=()=>{

    if (localStorage.getItem('UserData')) {
        
    } else {
        
        ACCOUNTPAGEROUTE();

    }

}

const SHOPITEM=()=>{

    if (localStorage.getItem('UserData')) {

        SESSIONDEJSONDATA('CurrentProducts',(data)=>{

            LOCALDEJSONDATA('ShopData',(element)=>{

                if (element.includes(data.ID)) {

                    JSONREMOVER(localStorage.getItem('ShopData'),[data.ID],(Mydata)=>{

                        STOREDATA(' ','ShopData',Mydata);

                        PRODUCTSDETAILSPAGE();

                    });
                        
                } else {

                    JSONADDER(localStorage.getItem('ShopData'),[data.ID],(Mydata)=>{

                        STOREDATA(' ','ShopData',Mydata);

                        PRODUCTSDETAILSPAGE();

                    });
                        
                };

            });

        });
        
    } else {
        
        ACCOUNTPAGEROUTE();

    };

};

const SAVEITEM=()=>{

    if (localStorage.getItem('UserData')) {

        SESSIONDEJSONDATA('CurrentProducts',(data)=>{

            LOCALDEJSONDATA('SavedData',(element)=>{

                if (element.includes(data.ID)) {

                    JSONREMOVER(localStorage.getItem('SavedData'),[data.ID],(Mydata)=>{

                        STOREDATA(' ','SavedData',Mydata);

                        if (navigator.onLine) {
                
                            GETDATA(API,'Users',(data)=>{
                
                                FINDER(data,'ID',localStorage.getItem('User'),(User)=>{
                
                                    if (User.ID === localStorage.getItem('User')) {
                
                                        const INFO=[User.UserName,User.UserEmail,User.UserPassword,User.Date,User.Deleted,User.Photo,User.Activity,User.Location,User.Device,localStorage.getItem('SavedData'),User.Settings,User.Notifications,User.Updates,User.Versions,User.BoughtProducts,User.ShoppedProducts];
                
                                            UPDATEDATA(API,'Users',User.ID,INFO,(Reason)=>{
                
                                                USERCONNECTION(()=>{
                
                                                });
                
                                            },(error)=>{
                
                                            TOAST('Failed to Remove Profile Photo');
                
                                        });
                                                    
                                    } 
                
                                });
                
                            });

                        }

                        PRODUCTSDETAILSPAGE();

                    });
                        
                } else {

                    JSONADDER(localStorage.getItem('SavedData'),[data.ID],(Mydata)=>{

                        STOREDATA(' ','SavedData',Mydata);

                        if (navigator.onLine) {
                
                            GETDATA(API,'Users',(data)=>{
                
                                FINDER(data,'ID',localStorage.getItem('User'),(User)=>{
                
                                    if (User.ID === localStorage.getItem('User')) {
                
                                        const INFO=[User.UserName,User.UserEmail,User.UserPassword,User.Date,User.Deleted,User.Photo,User.Activity,User.Location,User.Device,localStorage.getItem('SavedData'),User.Settings,User.Notifications,User.Updates,User.Versions,User.BoughtProducts,User.ShoppedProducts];
                
                                            UPDATEDATA(API,'Users',User.ID,INFO,(Reason)=>{
                
                                                USERCONNECTION(()=>{
                
                                                });
                
                                            },(error)=>{
                
                                            TOAST('Failed to Remove Profile Photo');
                
                                        });
                                                    
                                    } 
                
                                });
                
                            });

                        };

                        PRODUCTSDETAILSPAGE();

                    });
                        
                };

            });

        });
        
    } else {

        ACCOUNTPAGEROUTE();
        
    };

};

const RATEITEM=()=>{
    if (localStorage.getItem('UserData')) {

        if (navigator.onLine) {

            RATINGCORE();
            
        };

        SESSIONDEJSONDATA('CurrentProducts',(data)=>{

            LOCALDEJSONDATA('RatedData',(element)=>{

                if (element.includes(data.ID)) {

                    JSONREMOVER(localStorage.getItem('RatedData'),[data.ID],(Mydata)=>{

                        STOREDATA(' ','RatedData',Mydata);

                        PRODUCTSDETAILSPAGE();

                    });
                        
                } else {

                    JSONADDER(localStorage.getItem('RatedData'),[data.ID],(Mydata)=>{

                        STOREDATA(' ','RatedData',Mydata);

                        PRODUCTSDETAILSPAGE();

                    });
                        
                };

            });

        });
        
    } else {

        ACCOUNTPAGEROUTE();
        
    };

};

const RATINGCORE=()=>{

    const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

    GETDATA(API,'Products',(data)=>{

        LOCALDEJSONDATA('RatedData',(RatedData)=>{

            REDUX(data,(Element)=>{

                if (RatedData.includes(Element.ID)) {
                    
                    if (localStorage.getItem('User')) {

                        JSONADDER(Element.ProductRated,[localStorage.getItem('User')],(Rateddata)=>{

                            const INFO=[Element.ProductName,Element.ProductPrice,Element.ProductDetails,Element.ProductCatergory,Element.ProductImage,Element.ProductImageOne,Element.ProductImageTwo,Element.ProductImageThree,Element.CreatedOn,Element.CreatedBy,Element.Approved,Element.ProductNumber,Rateddata,Element.ProductComments,Element.ProductSaved,Element.ProductShop,Element.ProductBought];

                            UPDATEDATA(API,'Products',Element.ID,INFO,(Data)=>{

                                console.log(Data);

                            },(Data)=>{

                                console.log(Data);

                            });

                        });
                        
                    };

                }

            });

        });

    });

};

const SAVEDITEMDISPLAY=()=>{

    const SavedItems=document.querySelector('#SavedItems');

    const SavedText=document.querySelector('.SavedText');

    SESSIONDEJSONDATA('CurrentProducts',(data)=>{

        LOCALDEJSONDATA('SavedData',(element)=>{

            if (element.includes(data.ID)) {

                SavedItems.src=WHITESAVEDICON;

                SavedText.innerHTML='Saved';
                
            } else {

                SavedItems.src=WHITESAVEICON;

                SavedText.innerHTML='Save';
                
            };

        });

    });

};

const SHOPITEMDISPLAY=()=>{

    const SavedItems=document.querySelector('#Shop');

    const SavedText=document.querySelector('.Shopped');

    SESSIONDEJSONDATA('CurrentProducts',(data)=>{

        LOCALDEJSONDATA('ShopData',(element)=>{

            if (element.includes(data.ID)) {

                STYLED(SavedItems,'background','orange')

                SavedText.innerHTML='Shopped';
                
            } else {

                STYLED(SavedItems,'background','teal')

                SavedText.innerHTML='Shop';
                
            };

        });

    });

};

const RATEDITEMDISPLAY=()=>{

    const SavedItems=document.querySelector('#RatedIcon');

    const SavedText=document.querySelector('.Rated');

    SESSIONDEJSONDATA('CurrentProducts',(data)=>{

        LOCALDEJSONDATA('RatedData',(element)=>{

            if (element.includes(data.ID)) {

                SavedItems.src=WHITEHEARTICON;

                SavedText.innerHTML='Rated';
                
            } else {

                SavedItems.src=WHITEUNHEARTICON;

                SavedText.innerHTML='Rated';
                
            };

        });

    });

};

const ACCOUNTPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='PRODUCTDETAILSPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Access</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'>

            <h1 class='LogInName'>Login To Use All Features</h1>

            <div class='TopNav'>

                <button class='SearchFilterButton'>

                    <img class='FilterIcon' src='${WHITEGMAILICON}'/>
                
                </button>

                <input id='Email' class='SearchInputer' type='email' placeholder='Enter User Email' />

            </div>
            
            <div class='TopNav'>

                <button class='SearchFilterButton'>

                    <img class='FilterIcon' src='${WHITESECRETCODEICON}'/>
                
                </button>

                <input id='Password' class='SearchInputer' type='password' placeholder='Enter User Password' />

            </div>

            <p class='ForgotPassword'>Forgot Password?</p>

            <button class='LoginButton'>Sign In</button>

            <button id='CreateAccount' class='LoginButton'>Create Account</button>
        
        </div>
        
    `);

    const CountryDiv=document.querySelector('.CountryDiv');

    const CreateAccount=document.querySelector('#CreateAccount');

    CreateAccount.addEventListener('click',()=>{

        CREATEACCOUNT(CountryDiv);

    });

    const ForgotPassword=document.querySelector('.ForgotPassword');

    ForgotPassword.addEventListener('click',()=>{

        FORGOTPASSWORD(CountryDiv);

    });

    const LoginButton=document.querySelector('.LoginButton');

    const Email=document.querySelector('#Email');

    const Password=document.querySelector('#Password');

    LoginButton.addEventListener('click',()=>{

        if (Email.value) {

            if (Password.value) {

                if (navigator.onLine) {

                    TOAST('Please Wait');

                    GETDATA(API,'Users',(data)=>{
    
                        FINDER(data,'UserEmail',Email.value,(User)=>{

                            if (User.UserEmail === Email.value) {

                                if (User.UserPassword === Password.value) {

                                    if (!User.Deleted) {

                                        STOREDATA(' ','User',User.ID);

                                        STOREDATA(' ','Area',User.Location);

                                        STOREDATA(' ','SavedData',User.SavedItems);

                                        JSONIFICATION(User,(MyData)=>{

                                            STOREDATA(' ','UserData',MyData);

                                            RELOAD();

                                        });
                                        
                                    } else {

                                        TOAST('Something Went Wrong');
                                        
                                    };
                                    
                                } else {

                                    TOAST('Wrong User Password');
                                    
                                };
                                
                            } else {

                                TOAST('User Not Found');
                                
                            };
                    
                        });
    
                    });
                    
                } else {

                    TOAST('Check Your Internet');
                    
                }
            
            } else {
                
                TOAST('Enter Password');

            }
            
        } else {
            
            TOAST('Enter Email');

        }

    });
    
};

const CREATEACCOUNT=(CountryDiv)=>{

        DISPLAY(CountryDiv,`

            <h1 class='LogInName'>Create Account For Features Access</h1>

            <div class='TopNav'>

                <button class='SearchFilterButton'>

                    <img class='FilterIcon' src='${WHITEUSERICON}'/>
                
                </button>

                <input id='Name' class='SearchInputer' type='text' placeholder='Enter User Name' />

            </div>

            <div class='TopNav'>

                <button class='SearchFilterButton'>

                    <img class='FilterIcon' src='${WHITEGMAILICON}'/>
                
                </button>

                <input id='Email' class='SearchInputer' type='email' placeholder='Enter User Email' />

            </div>

            <div class='TopNav'>

                <button class='SearchFilterButton'>

                    <img class='FilterIcon' src='${WHITESECRETCODEICON}'/>
                
                </button>

                <input id='Password' class='SearchInputer' type='password' placeholder='Enter User Password' />

            </div>

            <button class='LoginButton'>Sign Up</button>

            <button id='CreateAccount' class='LoginButton' onclick='ACCOUNTPAGE()'>Login</button>
        
    `);

    const LoginButton=document.querySelector('.LoginButton');
    const Name=document.querySelector('#Name');
    const Email=document.querySelector('#Email');
    const Password=document.querySelector('#Password');

    LoginButton.addEventListener('click',()=>{

        if (Name.value) {

            if (Email.value) {

                if (Password.value) {

                    if (navigator.onLine) {

                        TOAST('Please Wait');

                        GETDATA(API,'Users',(data)=>{

                            FINDER(data,'UserEmail',Email.value,(user)=>{

                                if (user.UserEmail === Email.value ) {

                                    TOAST('User Found');
                                    
                                } else {

                                    const HEADERS=['UserName','UserEmail','UserPassword','Date'];

                                    const INFO=[Name.value,Email.value,Password.value,new Date()];

                                    const Message='Welcome to Qel Medistore App,\n\nThank You For Your Account Creation!\n\n Get Your Online Medical Needs Supplied to You,\n\n For More Information Please Visit Us Here:\n\nhttps://qelmedistore.site'

                                    QELMAIL(Email.value,'Account Creation',Message,(Data)=>{

                                        if (Data.message === 'Email sent successfully.' ) {
                                    
                                            INSERTDATA(API,'Users',HEADERS,INFO,(data)=>{
        
                                                STOREDATA(' ','User',data.uniqueId);
        
                                                RELOAD();
        
                                            },(data)=>{
        
                                                TOAST('Something Went Wrong');
        
                                            });
                                            
                                        } else {

                                            TOAST('Failed,Please Try Again');
                                            
                                        };

                                    },()=>{

                                        TOAST('Something Went Wrong');

                                    });
  
                                };

                            });

                        })
                
                    } else {
                        
                        TOAST('Check Your Internet');

                    };
                
                } else {
                    
                    TOAST('Enter Password');

                };
                
            } else {
                
                TOAST('Enter Email')

            };

        } else {
            

            TOAST('Enter Name')

        };

    });



};

const FORGOTPASSWORD=(CountryDiv)=>{

    DISPLAY(CountryDiv,`

        <h1 class='LogInName'>Recover Account For Access</h1>

        <div class='TopNav'>

            <button class='SearchFilterButton'>

                <img class='FilterIcon' src='${WHITEGMAILICON}'/>
                
            </button>

            <input class='SearchInputer' type='email' placeholder='Enter User Email' />

        </div>

        <button class='LoginButton'>Recover</button>

        <button id='CreateAccount' class='LoginButton' onclick='ACCOUNTPAGE()'>Login</button>
        
    `);

    const SearchInputer=document.querySelector('.SearchInputer');

    const LoginButton=document.querySelector('.LoginButton');

    LoginButton.addEventListener('click',()=>{

        if (SearchInputer.value) {

            if (navigator.onLine) {

                TOAST('Please Wait...');

                GETDATA(API,'Users',(data)=>{

                    FINDER(data,'UserEmail',SearchInputer.value,(MyData)=>{

                        if (MyData.UserEmail === SearchInputer.value &&!MyData.Deleted) {

                            QELMAIL(MyData.UserEmail,'Account Recovery','Your Password Is ===>'+MyData.UserPassword,(Data)=>{

                                if (Data.message === 'Email sent successfully.' ) {
                                    
                                    DISPLAY(CountryDiv,`

                                        <h1 class='LogInName'>Recover Account For Access</h1>

                                        <h1>Account Details Sent Your Email.</h1>

                                        <button id='CreateAccount' class='LoginButton' onclick='ACCOUNTPAGE()'>Login</button>
                                        
                                    `);

                                } else {

                                    TOAST('Account Recovery Failed');
                                    
                                };

                            },()=>{

                                TOAST('Something Went Wrong');

                            })
                            
                        } else {

                            TOAST('No User Account Found');
                            
                        };

                    });

                });
                
            } else {

                TOAST('Check Your Internet');
                
            };
            
        } else {

            TOAST('Enter User Email');
            
        };

    });

};

const PROFILEPAGE=()=>{

    LOCALDEJSONDATA('UserData',(data)=>{

        DISPLAY('',`

            <header>

                <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                    <img src='${WHITESINGLEBACKICON}'/>

                    <p>Back</p>
                    
                </div>

                <div class='ImageTextHolderSlider'>

                    <p>My Account</p>
                    
                </div>
            
            </header>

            <div class='CountryDiv'>

                <img class='ProfileImage' src='${data.Photo||WHITEUSERICON}'/>

                <div class='TopNav'>

                    <button class='SearchFilterButton'>

                        <img class='FilterIcon' src='${WHITEUSERPROFILEICON}'/>
                    
                    </button>

                    <input id='Password' readonly class='SearchInputer' type='password' placeholder='${data.UserName}' />

                </div>

                <div class='TopNav'>

                    <button class='SearchFilterButton'>

                        <img class='FilterIcon' src='${WHITEGMAILICON}'/>
                    
                    </button>

                    <input id='Password' readonly class='SearchInputer' type='password' placeholder='${data.UserEmail}' />

                </div>

                <div class='TopNav'>

                    <button class='SearchFilterButton'>

                        <img class='FilterIcon' src='${WHITECREATEDONICON}'/>
                    
                    </button>

                    <input id='Password' readonly class='SearchInputer' type='password' placeholder='${data.Date}' />

                </div>

                <div class='TopNav'>

                    <button class='SearchFilterButton'>

                        <img class='FilterIcon' src='${WHITELOCATIONICON}'/>
                    
                    </button>

                    <input id='Password' readonly class='SearchInputer' type='password' placeholder='${data.Location||'Kampala'}' />

                </div>

                <footer>

                    <button class='BuyButtons' onclick='UPDATEPROFILEPHOTOTACCOUNTROUTER()'>

                        <p>Update Profile Photo</p>
                    
                    </button>

                    <button id='Shop'  class='BuyButtons' onclick='UPDATEPROFILEDETAILSACCOUNTROUTER()' >

                        <p class='Shopped'>Update Profile Details</p>
                    
                    </button>
                
                </footer>

            </div>
            
        `);

    });

};

const LOGOUT=()=>{

    DELETEDATA(' ','User');

    DELETEDATA(' ','UserData');

    RELOAD();

};

const RATEDITEMS=()=>{

    const SpecialProducts=document.querySelector('#SpecialProducts');

    const OurProducts=document.querySelector('.OurProducts');

    OurProducts.innerHTML='Rated Products';

    DISPLAY(SpecialProducts,'');

        GETINDEXEDDATA('Products','Products',(element)=>{

        CHECKER(element.ProductRated,()=>{

            CREATEELEMENT(SpecialProducts,'div','SectionDivso',(ELEMENTS)=>{

                if (localStorage.getItem('ConvertedPrice')) {

                    DOLLAREXCHANGE('USD',element.ProductPrice,(data)=>{

                        DISPLAY(ELEMENTS,`

                            <img class='ProductImage'src='${element.ProductImage}'/>

                            <footer class='SectionFooters'>

                                <p class='ProductNamer'>${element.ProductName}</p>

                                <h1 class='ProductPrice'>Price:${data}USD</1>
                            
                            </footer

                        `);   

                    });
                    
                } else {

                    DISPLAY(ELEMENTS,`

                        <img class='ProductImage'src='${element.ProductImage}'/>

                        <footer class='SectionFooters'>

                            <p class='ProductNamer'>${element.ProductName}</p>

                            <h1 class='ProductPrice'>Price:${element.ProductPrice.toLocaleString()}UGX</1>
                        
                        </footer

                    `);
                
                };

                CLICK(ELEMENTS,()=>{

                    JSONIFICATION(element,(MyElement)=>{

                        STOREDATA('','CurrentProducts',MyElement);

                        PRODUCTDETAILSPAGEROUTE();

                    });
                    
                });

            });

        });

    });

};

const TRENDINGDITEMS=()=>{

    const SpecialProducts=document.querySelector('#SpecialProducts');

    const OurProducts=document.querySelector('.OurProducts');

    OurProducts.innerHTML='Trending Products';

    DISPLAY(SpecialProducts,'');

        GETINDEXEDDATA('Products','Products',(element)=>{

        CHECKER(element.ProductRated >= 5,()=>{

            CREATEELEMENT(SpecialProducts,'div','SectionDivso',(ELEMENTS)=>{

                if (localStorage.getItem('ConvertedPrice')) {

                    DOLLAREXCHANGE('USD',element.ProductPrice,(data)=>{

                        DISPLAY(ELEMENTS,`

                            <img class='ProductImage'src='${element.ProductImage}'/>

                            <footer class='SectionFooters'>

                                <p class='ProductNamer'>${element.ProductName}</p>

                                <h1 class='ProductPrice'>Price:${data}USD</1>
                            
                            </footer

                        `);   

                    });
                    
                } else {

                    DISPLAY(ELEMENTS,`

                        <img class='ProductImage'src='${element.ProductImage}'/>

                        <footer class='SectionFooters'>

                            <p class='ProductNamer'>${element.ProductName}</p>

                            <h1 class='ProductPrice'>Price:${element.ProductPrice.toLocaleString()}UGX</1>
                        
                        </footer

                    `);
                
                };

                CLICK(ELEMENTS,()=>{

                    JSONIFICATION(element,(MyElement)=>{

                        STOREDATA('','CurrentProducts',MyElement);

                        PRODUCTDETAILSPAGEROUTE();

                    });
                    
                });

            });

        });

    });

};

const BOUGHTITEMS=()=>{

    const SpecialProducts=document.querySelector('#SpecialProducts');

    const OurProducts=document.querySelector('.OurProducts');

    OurProducts.innerHTML='Bought Products';

    DISPLAY(SpecialProducts,'');

        GETINDEXEDDATA('Products','Products',(element)=>{

        CHECKER(element.ProductRated >= 5,()=>{

            CREATEELEMENT(SpecialProducts,'div','SectionDivso',(ELEMENTS)=>{

                if (localStorage.getItem('ConvertedPrice')) {

                    DOLLAREXCHANGE('USD',element.ProductPrice,(data)=>{

                        DISPLAY(ELEMENTS,`

                            <img class='ProductImage'src='${element.ProductImage}'/>

                            <footer class='SectionFooters'>

                                <p class='ProductNamer'>${element.ProductName}</p>

                                <h1 class='ProductPrice'>Price:${data}USD</1>
                            
                            </footer

                        `);   

                    });
                    
                } else {

                    DISPLAY(ELEMENTS,`

                        <img class='ProductImage'src='${element.ProductImage}'/>

                        <footer class='SectionFooters'>

                            <p class='ProductNamer'>${element.ProductName}</p>

                            <h1 class='ProductPrice'>Price:${element.ProductPrice.toLocaleString()}UGX</1>
                        
                        </footer

                    `);
                
                };

                CLICK(ELEMENTS,()=>{

                    JSONIFICATION(element,(MyElement)=>{

                        STOREDATA('','CurrentProducts',MyElement);

                        PRODUCTDETAILSPAGEROUTE();

                    });
                    
                });

            });

        });

    });

};

const PRODUCTPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div id='SectionNames' class='ImageTextHolderSlider'>

                <p class='SectionNamer' >Products</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

    const AllProducts=document.querySelector('.CountryDiv');

    GETINDEXEDDATA('Products','Products',(element)=>{

        CHECKER(element.Approved,()=>{

            CREATEELEMENT(AllProducts,'div','SectionDivso',(ELEMENTS)=>{

                if (localStorage.getItem('ConvertedPrice')) {

                    DOLLAREXCHANGE('USD',element.ProductPrice,(data)=>{

                        DISPLAY(ELEMENTS,`

                            <img class='ProductImage'src='${element.ProductImage}'/>

                            <footer class='SectionFooters'>

                                <p class='ProductNamer'>${element.ProductName}</p>

                                <h1 class='ProductPrice'>Price:${data}USD</1>
                            
                            </footer

                        `);   

                    });
                    
                } else {

                    DISPLAY(ELEMENTS,`

                        <img class='ProductImage'src='${element.ProductImage}'/>

                        <footer class='SectionFooters'>

                            <p class='ProductNamer'>${element.ProductName}</p>

                            <h1 class='ProductPrice'>Price:${element.ProductPrice.toLocaleString()}UGX</1>
                        
                        </footer

                    `);
                
                };

                CLICK(ELEMENTS,()=>{

                    JSONIFICATION(element,(MyElement)=>{

                        STOREDATA('','CurrentProducts',MyElement);

                        PRODUCTDETAILSPAGEROUTE();

                    });
                    
                });

            });

        });

    });

};

const POLICYPAGEROUTER=()=>{

    ROUTE('',PRIVACYPOLICYPAGE,'HOMEPAGE');

};

const PRIVACYPOLICYPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div id='SectionNames' class='ImageTextHolderSlider'>

                <p class='SectionNamer' >Policy</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

    const AllProducts=document.querySelector('.CountryDiv');

    GETINDEXEDDATA('Policies','Policies',(element)=>{

        CHECKER(element.ID === 'a7f2c9de-8b64-4e1a-a5d7-3fcb9182d4e6'  ,()=>{

            DISPLAY(AllProducts,` <br> <p class='LeftText'>${element.Data}</p>`+'<br><br>');

        });

    });

};

const APPUPDATES=()=>{

    WEBSITE('https://qelmedistore.site');

};

const CONTACTUSPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Reach Us</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'>

            <button class='CountryDivs' onclick=''>

                <p class='LeftDistrict'>Gmail</p>

                <img class='RightDistricitImage'src='${WHITEGMAILICON}'/>
            
            </button>

            <button class='CountryDivs' onclick=''>

                <p class='LeftDistrict'>Call</p>

                <img class='RightDistricitImage'src='${WHITEPHONEICON}'/>
            
            </button>

        </div>
        
    `);

};

const HELPPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div id='SectionNames' class='ImageTextHolderSlider'>

                <p class='SectionNamer' >Help</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

    const AllProducts=document.querySelector('.CountryDiv');

    GETINDEXEDDATA('Policies','Policies',(element)=>{

        CHECKER(element.ID === 'a7f2c9de-8b64-4e1a-a5d7-3fcb9182d4e6'  ,()=>{

            DISPLAY(AllProducts,` <br> <p class='LeftText'>${element.Data}</p>`+'<br><br>');

        });

    });

};

const DELETEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='PRODUCTDETAILSPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Access</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'>

            <h1 class='LogInName'>Delete Access</h1>

            <div class='TopNav'>

                <button class='SearchFilterButton'>

                    <img class='FilterIcon' src='${WHITEHELPICON}'/>
                
                </button>

                <input id='Email' class='SearchInputer' type='text' placeholder='Enter Reason For Account Deletion' />

            </div>
            
            <button class='LoginButton'>Delete My Account</button>

        </div>
        
    `);

    const LoginButton=document.querySelector('.LoginButton');

    const Email=document.querySelector('#Email');

    LoginButton.addEventListener('click',()=>{

        if (Email.value) {

            if (navigator.onLine) {

                if (localStorage.getItem('UserData')) {

                    TOAST('Please Wait');

                    STOREDATA('','AccountDeleted',Email.value);

                        GETDATA(API,'Users',(data)=>{

                            FINDER(data,'ID',localStorage.getItem('User'),(User)=>{

                                if (User.ID === localStorage.getItem('User')) {

                                    const INFO=[User.UserName,User.UserEmail,User.UserPassword,User.Date,Email.value,User.Photo,User.Activity,User.Location,User.Device,User.SavedItems,User.Settings,User.Notifications,User.Updates,User.Versions,User.BoughtProducts,User.ShoppedProducts]

                                    UPDATEDATA(API,'Users',User.ID,INFO,(Reason)=>{

                                        DELETEDATA(' ','User');

                                        DELETEDATA(' ','UserData');

                                        RELOAD();

                                        console.log(Reason);

                                    },(error)=>{

                                        TOAST('Failed to Delete Account')

                                    });
                                    
                                } 

                            });

                        });
                        
                } else {

                    TOAST('No Account Found');
                    
                };
                
            } else {

                TOAST('Check Your Internet');
                
            }
            
        } else {

            TOAST('Enter Reason For Account Deletion');
            
        };

    });

};

const PROFILEPHOTOPAGE=()=>{

    DELETEDATA('','ProfileData');

    LOCALDEJSONDATA('UserData',(data)=>{

        DISPLAY('',`

            <header>

                <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                    <img src='${WHITESINGLEBACKICON}'/>

                    <p>Back</p>
                    
                </div>

                <div class='ImageTextHolderSlider'>

                    <p>My Photo</p>
                    
                </div>
            
            </header>

            <div class='CountryDiv'>

                <img class='ProfileImage' src='${data.Photo||WHITEUSERICON}'/>

                <button class='LoginButton'>Select Profile Image</button>

                <footer>

                    <button id='RemovePhoto' class='BuyButtons'>

                        <p>Remove Profile Photo</p>
                    
                    </button>

                    <button id='Shop'  class='BuyButtons'>

                        <p class='Shopped'>Update Profile Details</p>
                    
                    </button>
                
                </footer>

            </div>
            
        `);

        const LoginButton=document.querySelector('.LoginButton');

        const ProfileImage=document.querySelector('.ProfileImage');
        
        LoginButton.addEventListener('click',()=>{

            IMAGEPICKER(ProfileImage,(UserData)=>{

                STOREDATA('','ProfileData',UserData);

            });

        });

        const RemovePhoto=document.querySelector('#RemovePhoto');

        RemovePhoto.addEventListener('click',()=>{

            if (navigator.onLine) {
                
                GETDATA(API,'Users',(data)=>{
    
                    FINDER(data,'ID',localStorage.getItem('User'),(User)=>{
    
                        if (User.ID === localStorage.getItem('User')) {
    
                            const INFO=[User.UserName,User.UserEmail,User.UserPassword,User.Date,User.Deleted,'',User.Activity,User.Location,User.Device,User.SavedItems,User.Settings,User.Notifications,User.Updates,User.Versions,User.BoughtProducts,User.ShoppedProducts]
    
                                UPDATEDATA(API,'Users',User.ID,INFO,(Reason)=>{
    
                                    USERCONNECTION(()=>{
    
                                        PROFILEUSERROUTER();
    
                                    });
    
                                },(error)=>{
    
                                TOAST('Failed to Remove Profile Photo');
    
                            });
                                        
                        } 
    
                    });
    
                });

            } else {
                
                TOAST('Check Your Internet');

            };

        });

        const Shop=document.querySelector('#Shop');

        Shop.addEventListener('click',()=>{

            if (sessionStorage.getItem('ProfileData')) {
                
                if (navigator.onLine) {
                    
                    GETDATA(API,'Users',(data)=>{
        
                        FINDER(data,'ID',localStorage.getItem('User'),(User)=>{
        
                            if (User.ID === localStorage.getItem('User')) {
        
                                const INFO=[User.UserName,User.UserEmail,User.UserPassword,User.Date,User.Deleted,sessionStorage.getItem('ProfileData'),User.Activity,User.Location,User.Device,User.SavedItems,User.Settings,User.Notifications,User.Updates,User.Versions,User.BoughtProducts,User.ShoppedProducts]
        
                                    UPDATEDATA(API,'Users',User.ID,INFO,(Reason)=>{
        
                                        USERCONNECTION(()=>{
        
                                            PROFILEUSERROUTER();
        
                                        });
        
                                    },(error)=>{
        
                                    TOAST('Failed to Remove Profile Photo');
        
                                });
                                            
                            } 
        
                        });
        
                    });
    
                } else {
                    
                    TOAST('Check Your Internet');
    
                };

            } else {
                
                TOAST('No Profile Photo Added');

            };

        });

    });

};

const PROFILEDETAILSPAGE=()=>{

    LOCALDEJSONDATA('UserData',(data)=>{

        DISPLAY('',`

            <header>

                <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                    <img src='${WHITESINGLEBACKICON}'/>

                    <p>Back</p>
                    
                </div>

                <div class='ImageTextHolderSlider'>

                    <p>My Account</p>
                    
                </div>
            
            </header>

            <div class='CountryDiv'>

                <div class='TopNav'>

                    <button class='SearchFilterButton'>

                        <img class='FilterIcon' src='${WHITEUSERPROFILEICON}'/>
                    
                    </button>

                    <input id='Name' class='SearchInputer' type='text' placeholder='Enter User Name' />

                </div>

                <footer>

                    <button class='BuyButtons' onclick='DELETEACCOUNTROUTER()'>

                        <p>Delete User Profile</p>
                    
                    </button>

                    <button id='Shop'  class='BuyButtons'>

                        <p class='Shopped'>Update Profile</p>
                    
                    </button>
                
                </footer>

            </div>
            
        `);

        const Shop=document.querySelector('#Shop');

        const Name=document.querySelector('#Name');

        Shop.addEventListener('click',()=>{

            if (Name.value) {
                
                if (navigator.onLine) {
                    
                    GETDATA(API,'Users',(data)=>{
        
                        FINDER(data,'ID',localStorage.getItem('User'),(User)=>{
        
                            if (User.ID === localStorage.getItem('User')) {
        
                                const INFO=[Name.value||User.UserName,User.UserEmail,User.UserPassword,User.Date,User.Deleted,sessionStorage.getItem('ProfileData'),User.Activity,User.Location,User.Device,User.SavedItems,User.Settings,User.Notifications,User.Updates,User.Versions,User.BoughtProducts,User.ShoppedProducts]
        
                                    UPDATEDATA(API,'Users',User.ID,INFO,(Reason)=>{
        
                                        USERCONNECTION(()=>{
        
                                            PROFILEUSERROUTER();
        
                                        });
        
                                    },(error)=>{
        
                                    TOAST('Failed to Update User Data');
        
                                });
                                            
                            } 
        
                        });
        
                    });
    
                } else {
                    
                    TOAST('Check Your Internet');
    
                };

            } else {
                
                TOAST('Please Add Information');

            };

        });

    });

};