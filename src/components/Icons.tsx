import React from 'react';
import { UserMinus, Mail, UserPlus, XCircle } from 'lucide-react';

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h16" />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="text-gray-300 opacity-80">{children}</div>
);

export const FootprintsIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <IconWrapper>
        <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" xmlns="http://www.w.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24.5 50.5c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/>
            <path d="M22 39.5c0 0-1-5 4-7.5s9 0 9 0"/>
            <path d="M44.5 27.5c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/>
            <path d="M42 16.5c0 0-1-5 4-7.5s9 0 9 0"/>
        </svg>
    </IconWrapper>
);

export const PencilIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <IconWrapper>
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
            <path d="m15 5 4 4"/>
        </svg>
    </IconWrapper>
);

export const GraphIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <IconWrapper>
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w.org/2000/svg">
            <circle cx="4" cy="16" r="1.5"></circle>
            <circle cx="10" cy="8" r="1.5"></circle>
            <circle cx="16" cy="12" r="1.5"></circle>
            <circle cx="21" cy="16" r="1.5"></circle>
            <path d="M5.5 15l3-6"/>
            <path d="M11.5 9l3 2"/>
            <path d="M17.5 13l2 2"/>
        </svg>
    </IconWrapper>
);

export const HeadIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <IconWrapper>
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
             <circle cx="12" cy="7" r="4"></circle>
             <path d="M12 11c-2 0-3.5 1.5-3.5 3.5V15"></path>
             <path d="M12 11c2 0 3.5 1.5 3.5 3.5V15"></path>
        </svg>
    </IconWrapper>
);

export const UserMinusIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <UserMinus className={className} />
);

export const MailIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <Mail className={className} />
);

export const UserPlusIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <UserPlus className={className} />
);

export const XCircleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <XCircle className={className} />
);
