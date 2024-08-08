interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface AnimatedBackgroundProps {
    children: React.ReactNode;
}
interface GoogleMapBackgroundProps {
    apiKey: string;
    lat: number;
    lng: number;
    zoom: number;
}

