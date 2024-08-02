type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    logo: (props: IconProps) => (
        <svg
            viewBox="0 0 2048 2036" 
            width="20" 
            height="20" 
            xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(1961,601)" d="m0 0h7l2 1-2 5-75 75-7 8-1 1-11 1h-368v348h315l1-299 1-2 18-1h85l1 1v581l-1 37-3 15-5 12-9 16-9 11-9 9-16 11-17 8-15 4-24 2h-431l-1-2 7-8 64-64h2l2-4 12-11h348l-1-301h-2l-9 7-14 13-11 9-14 12-11 9-14 12-11 9-7 2-47 1h-177l-22-2-15-4-14-6-12-8-12-11-8-9-8-13-7-15-4-14-2-24-1-40v-238l1-50 2-14 6-15 8-15 11-14 8-8 13-10 14-8 15-6 11-2 451-1z" fill="#024E5B"/>
            <path transform="translate(783,603)" d="m0 0h341l17 2 12 4 15 8 12 9 17 17 10 15 8 17 3 11 1 7v118l-4 7-10 10-7 8-81 81-4 1-182 1h-115l2-5 7-9 8-7 19-19 7-8 42-42 3-2 208 1 1-134-1-1-316-1 1 4v344h414l8 1v86l-3 1-364 1h-51l-20-1-16-3-19-8-14-9-12-11-9-11-8-14-8-20-2-10-1-14v-330l2-16 5-14 9-16 8-10 9-10 8-8 17-12 13-6 9-2z" fill="#014E5B"/>
            <path transform="translate(258,1624)" d="m0 0h34l25 3 18 4 18 6 21 10 21 14 11 9 12 11 8 7 9 10 10 13 9 14 8 15 8 19 7 22 4 21 1 9v31l-2 21-5 23-9 26-13 25-10 14-9 11-7 7-7 8-8 7-10 9-13 9-16 9-21 10-20 7-28 8h-56l-30-9-29-10-18-10-15-10-10-9-8-7-20-20-9-11-10-15-8-15-9-21-7-23-3-15-2-17v-27l3-22 5-23 8-24 10-20 8-12 9-12 9-10 7-8 11-11 22-18 16-9 25-12 22-7 23-4z" fill="#00BAE8"/>
            <path transform="translate(989,1624)" d="m0 0h31l26 3 19 4 20 7 16 8 14 8 16 12 15 13 18 18 13 17 11 19 10 21 9 28 4 22 1 11v22l-2 24-5 24-10 29-13 24-10 14-11 13-22 22-17 13-19 11-24 11-30 10-16 4h-55l-27-8-32-11-17-9-12-8-10-8-12-11-22-22-11-14-9-15-8-16-8-20-6-21-3-16-1-9v-36l4-26 6-21 7-20 10-19 7-10 8-11 13-15 19-19 11-9 10-7 18-10 22-10 24-7 19-3z" fill="#FECE41"/>
            <path transform="translate(1720,1624)" d="m0 0h30l26 3 22 5 21 8 19 10 15 10 10 8 10 9 8 7 10 10 9 11 10 14 8 14 10 22 8 24 4 19 2 25-1 27-3 21-5 19-8 23-12 23-12 17-11 13-20 20-14 11-14 9-26 13-21 8-20 6-12 3h-55l-28-8-29-10-19-10-15-10-11-9-8-8-8-7-7-7-7-8-10-12-11-18-13-28-6-19-5-23-2-22v-12l2-23 5-25 10-30 12-23 10-14 8-10 12-13 4-5h2v-2l8-7 15-13 18-11 25-12 21-7 20-4z" fill="#FD9694"/>
            <path transform="translate(107,603)" d="m0 0h101l2 6v66h2l9-8h2l2-4 6-7h2l2-4 20-20 8-7 20-20 3-2h140l21 2 16 5 13 7 10 8 10 9 10 11 10 15 6 13 3 11 1 9v118l-2 1-38 1h-61l-3-1-1-5v-114l-211-1v435l-3 1-63 1h-36l-2-1-1-4-1-25v-405l1-71 1-18z" fill="#014E5B"/>
        </svg>
    ),
    twitter: (props: IconProps) => (
        <svg
        {...props}
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
        >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
        </svg>
    ),
    github: (props: IconProps) => (
        <svg 
        {...props}
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 496 512"
        >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
    ),
    linkedin: (props: IconProps) => (
        <svg 
        {...props}
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
        >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        </svg>
    )
}