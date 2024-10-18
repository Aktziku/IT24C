class AppletList {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.applets = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderAppletList(this.applets, document.getElementById('applet-container'));
        document.getElementById('appletSearchList').style.display = 'none';
        document.getElementById('applet-container').style.display = 'flex';
        this.bindSearchEvent();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.applets = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderAppletList(applets, container = document.getElementById('applet-container')) {
        container.innerHTML = applets.map(applet => 
            `<div class="card applet-card">
                <div class="card-body">
                    <h5 class="card-title">${applet.title}</h5>
                    <p class="card-text">${applet.description}</p>
                    <a href="${applet.link}" class="btn btn-primary">Go to Applet</a>
                </div>
            </div>`
        ).join('');
    }

    bindSearchEvent() {
        const appletSearchBar = document.getElementById('appletSearchBar');
        const appletSearchListContainer = document.getElementById('appletSearchList');
        const mainAppletContainer = document.getElementById('applet-container');
    
        appletSearchBar.addEventListener('input', () => {
            this.filterApplets(appletSearchBar.value, appletSearchListContainer, mainAppletContainer);
        });
    }

    filterApplets(query, searchListContainer, mainContainer) {
        if (query.trim() === '') {
            // If search is empty, clear the search list container and show the main container
            searchListContainer.innerHTML = '';
            searchListContainer.style.display = 'none';
            mainContainer.style.display = 'flex';
        } else {
            // Filtering logic
            const filteredApplets = this.applets.filter(applet => {
                const fullText = `${applet.title} ${applet.description}`;
                return fullText.toLowerCase().includes(query.toLowerCase());
            });
            
            if (filteredApplets.length > 0) {
                // If there are matches, render them and hide the main container
                this.renderAppletList(filteredApplets, searchListContainer);
                mainContainer.style.display = 'none';
                searchListContainer.style.display = 'flex';
            } else {
                // If no matches, clear the search list and show the main container
                searchListContainer.innerHTML = 'No matches found';
                searchListContainer.style.display = 'flex';
                mainContainer.style.display = 'none';
            }
        }
    }
}

const appletList = new AppletList('appGallery.json');