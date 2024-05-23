

export class Theme {
    private static instance: Theme;
    public isDark: boolean = true;

    private constructor() {
       

     }
    

    public static getInstance(): Theme {
        if (!Theme.instance) {
            Theme.instance = new Theme();
        }

        return Theme.instance;
    }

    public toggleTheme(): void {
        this.isDark = !this.isDark;
        this.applyTheme();
    }

    private applyTheme(): void {
        const body = document.body;
        body.classList.toggle('dark-class', this.isDark);
        body.classList.toggle('white-class', !this.isDark);
    }

}
