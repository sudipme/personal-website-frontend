function AboutMePanel() {
    return (
        <div id='aboutme-panel'>
            <div id='aboutme-box'>
                <div id='my-intro-box'>
                    <img id='display-img' src={displayImg} alt='sudip halder'></img>
                    <h1 id='my-name'>Sudip Halder</h1>
                    <p id='aboutme'>
                        Hi, I am Sudip.
                        <br></br>
                        I am a Computer Science undergrad.

                        I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science.
                        <br></br>
                    </p>
                </div>
                <div id='nav-links-box'>
                    <NavLink widgetTitle={"Projects"} link="https://sudip.me/projects" />
                    <NavLink widgetTitle={"Blogs"} link="https://sudipme.medium.com" />
                    <NavLink widgetTitle={"Send a mail"} link="https://sudip.me/mail" />
                </div>
            </div>
        </div> 
    )
}

function DisplayGrid(props) {
    return (
        <div id='widget-grid'>
            {
                Object.keys(props.widgets).map((widgetKey) => {
                    const widget = props.widgets[widgetKey];
                    let position = widget.position;
                    let size = widget.size;
                    if (props.windowWidth < 1300) {
                        position = widget.mPosition;
                        size = widget.mSize
                    }
                    if (size === "small") {
                        return (
                            <SmallWidget
                                key={widget.title}
                                link={widget.link}
                                startPosition={position}
                                color={widget.color}
                                src={widget.icon}
                                widgetTitle={widget.title}
                                userId={widget.userId} />
                        );
                    } else if (size === "wide") {
                        return (
                            <WideWidget
                                key={widget.title}
                                link={widget.link}
                                startPosition={position}
                                color={widget.color}
                                src={widget.icon}
                                widgetTitle={widget.title}
                                userId={widget.userId} />
                        );
                    }
                    return (null);
                }
                )}
        </div>
    )
}

function WidgetsPanel() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    return (
        <div id='widgets-panel'>
            <div style={{ height: "50px" }}></div>
            <p id='widget-panel-heading'>Links 🔗</p>
            <DisplayGrid widgets={widgets} windowWidth={windowWidth} />

            <DisplayGrid widgets={profiles} windowWidth={windowWidth} />
        </div>
    )
}

let widgets = {
    twitter: {
        size: "small",
        mSize: "small",
        position: 1,
        mPosition: 1,
        color: "#E9F4FC",
        link: "https://x.com/sudiphl",
        icon: twitter_logo,
        title: "twitter",
        userId: "@sudiphl",
    },
    linkedin: {
        size: "small",
        mSize: "small",
        position: 2,
        mPosition: 2,
        color: "#E9F4FC",
        link: "https://linkedin.com/in/sudiphalder",
        icon: linkedinLogo,
        title: "LinkedIn",
        userId: "@sudiphalder",
    },
    instagram: {
        size: "small",
        mSize: "small",
        position: 3,
        mPosition: 1,
        color: "#FFFFFF",
        link: "https://instagram.com/sudiphl",
        icon: instagramLogo,
        title: "Instagram",
        userId: "@sudiphl",
    },
    medium: {
        size: "small",
        mSize: "small",
        position: 4,
        mPosition: 2,
        color: "#FFFFFF",
        link: "https://sudipme.medium.com",
        icon: mediumLogo,
        title: "Medium",
        userId: "@sudipme",
    },
}

let profiles = {
    github: {
        size: "wide",
        mSize: "wide",
        position: 1,
        mPosition: 1,
        color: "#FFFFFF",
        link: "https://github.com/sudipme",
        icon: githubLogo,
        title: "GitHub",
        userId: "@sudipme",
    },
    kaggle: {
        size: "small",
        mSize: "small",
        position: 3,
        mPosition: 1,
        color: "#FFFFFF",
        link: "https://kaggle.com/sudipme",
        icon: kaggleLogo,
        title: "Kaggle",
        userId: "@sudipme",
    },
    codechef: {
        size: "small",
        mSize: "small",
        position: 4,
        mPosition: 2,
        color: "#FFFFFF",
        link: "https://codechef.com/users/sudiphalder",
        icon: codechefLogo,
        title: "CodeChef",
        userId: "@sudiphalder",
    },
    codeforces: {
        size: "wide",
        mSize: "wide",
        position: 3,
        mPosition: 1,
        color: "#FFFFFF",
        link: "https://codeforces.com/profile/sudipme",
        icon: codeforcesLogo,
        title: "CodeForces",
        userId: "@sudipme",
    },
    leetcode: {
        size: "wide",
        mSize: "wide",
        position: 1,
        mPosition: 1,
        color: "#FFFFFF",
        link: "https://leetcode.com/sudip_halder",
        icon: leetcodeLogo,
        title: "Leetcode",
        userId: "@sudip_halder",
    },

}