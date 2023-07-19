import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";


const Table = () => {

    let { cryptoData } = useContext(CryptoContext);

    return (
        <div className="flex flex-col mt-9 border border-gray-100 rounded">
            {cryptoData ?
                <table className="w-full table-auto">
                    <thead className="capitalize text-base text-gray-100 border-b border-gray-100">
                        <tr>
                            <th className="py-1 px-12">asset</th>
                            <th className="py-1 px-12">name</th>
                            <th className="py-1 px-12">price</th>
                            <th className="py-1 px-12">totla volume</th>
                            <th className="py-1 px-12">market cap change</th>
                            <th className="py-1 px-12">1H</th>
                            <th className="py-1 px-12">24H</th>
                            <th className="py-1 px-12">7D</th>
                            <th className="py-1 px-12">image</th>

                        </tr>
                    </thead>
                    <tbody>
                        {cryptoData.map((data,index) => {
                            return (
                                <tr key={data.id} className="text-center text-base text-white capitalize  border-b borde-gray-100 hover:bg-gray-200 last:border-b-0 ">
                                    <td className="py-4">{index+1}</td>
                                    <td className="py-4">{data.name}</td>
                                    <td className="py-4">price</td>
                                    <td className="py-4">{data.total_volume}</td>
                                    <td className="py-4">{data.market_cap}</td>
                                    <td className="py-4">{data.price_change_percentage_1h_in_currency}</td>
                                    <td className="py-4">{data.price_change_percentage_24h_in_currency}</td>
                                    <td className="py-4">{data.price_change_percentage_7d_in_currency}</td>
                                    <td className="py-4 flex flex-row justify-center items-center">
                                        <img src={`${data.image}`} className="w-12" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> : null}
        </div>
    );
};

export default Table;
