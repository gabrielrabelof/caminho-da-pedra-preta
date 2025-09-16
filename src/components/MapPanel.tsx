import React from 'react';

const QuestionIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const PriceTag: React.FC<{ price: string; top: string; left: string; }> = ({ price, top, left }) => (
    <div className="absolute bg-white rounded-full py-1 px-3 shadow-lg font-bold text-sm text-gray-800" style={{ top, left }}>
        {price}
    </div>
);

const MapPopup: React.FC = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 bg-white rounded-xl shadow-2xl transform" style={{top: '30%', left: '35%'}}>
        <div className="relative">
            <div className="w-full h-24 bg-gray-200 rounded-t-xl"></div>
             <button className="absolute top-2 right-2 bg-white/70 rounded-full p-1 text-gray-600 hover:bg-white">
                <CloseIcon />
            </button>
        </div>
        <div className="p-4">
            <h3 className="font-bold text-gray-800">Cristo Redentor</h3>
            <button className="w-full mt-3 bg-teal-500 text-white font-semibold py-2 rounded-full hover:bg-teal-600 transition-colors">
                Começar
            </button>
        </div>
    </div>
);


const MapPanel: React.FC = () => {
    return (
        <div className="relative w-full h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src="https://i.imgur.com/1Z0u6Y5.png" alt="Map of a city with a river" className="w-full h-full object-cover" />
            
            <div className="absolute top-4 left-4 flex items-center bg-white/80 backdrop-blur-sm rounded-full py-1.5 px-3 cursor-pointer">
                <QuestionIcon />
                <span className="text-sm font-medium text-gray-700">Saiba mais</span>
            </div>

            <PriceTag price="R$220" top="20%" left="68%" />
            <PriceTag price="R$551" top="42%" left="55%" />
            <PriceTag price="R$400" top="48%" left="58%" />
            <PriceTag price="R$400" top="55%" left="48%" />
            <PriceTag price="R$484" top="62%" left="60%" />
            <PriceTag price="R$745" top="75%" left="55%" />

            <MapPopup />

            <div className="absolute bottom-1 right-2 text-xs text-gray-500">
                <span>Atalhos do teclado</span>
                <span className="mx-2">Dados cartográficos ©2025</span>
                <span className="mr-2">500 m</span>
                <span className="mr-2">Termos</span>
                <span>Inform.</span>
            </div>
        </div>
    );
}

export default MapPanel;
