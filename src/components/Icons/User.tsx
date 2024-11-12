export default function UserIcon({ fill, size, height, width, ...props }: any) {
    return (
        <svg width={size || width || "24"} height={size || height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="12" cy="6.00049" r="4" fill={fill || "currentColor"} />
            <path d="M20 17.5005C20 19.9858 20 22.0005 12 22.0005C4 22.0005 4 19.9858 4 17.5005C4 15.0152 7.58172 13.0005 12 13.0005C16.4183 13.0005 20 15.0152 20 17.5005Z" fill={fill || "currentColor"} />
        </svg>
    );
}
