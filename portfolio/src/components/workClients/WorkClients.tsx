import React, { useEffect, useRef, useState } from 'react'

const WorkClients = () => {
    const [activeTabId, setActiveTabId] = useState(1)

    return (
        <>
            <div className='my-20' id='trabajos'>
                <h2
                    className='w-full my-2 text-4xl font-bold tracking-wider leading-tight text-center text-black pt-10 uppercase md:text-5xl lg:text-6xl'
                >
                    Trabajos
                </h2>
                <div
                    className='h-1 mx-auto bg-black w-[230px] md:w-[270px] lg:w-[370px] opacity-90 my-0 py-0 rounded-t'
                />
                <div className='sm:max-w-5xl max-w-lg py-20 mx-auto'>
                    <div className='flex flex-col sm:flex-row items-center lg:min-h-[340px]'>
                        <div className='p-0 m-0 w-max z-10 list-none relative'>
                            <button
                                id='tab-1'
                                role='tab'
                                className={
                                    activeTabId === 1
                                        ? 'flex items-center w-full h-10 pl-20 pb-2 pt-0 bg-transparent border-l-2 border-solid font-thunderMedium tracking-widest text-lg border-teal-500 text-teal-500 text-center whitespace-nowrap sm:scale-110'
                                        : 'flex items-center w-full h-10 pl-20 pb-2 pt-0 bg-transparent border-l-2 border-solid font-thunderLight tracking-wider text-lg border-gray-500 text-gray-500  text-center whitespace-nowrap hover:text-teal-500  transition ease-in-out delay-150'
                                }
                                onClick={() => setActiveTabId(1)}
                                tabIndex={activeTabId === 1 ? 0 : -1}
                                aria-selected={activeTabId === 1}
                                aria-controls={`panel-${1}`}
                            >
                                <span className='text-sm md:text-base lg:text-lg'>Municipalidad de Yumbel</span>
                            </button>
                            <button
                                id='tab-2'
                                role='tab'
                                className={
                                    activeTabId === 2
                                        ? 'flex items-center w-full h-10 px-20 pb-2 pt-0 bg-transparent border-l-2 border-solid font-thunderMedium tracking-widest text-lg border-teal-500 text-teal-500 text-center whitespace-nowrap sm:scale-110'
                                        : 'flex items-center w-full h-10 px-20 pb-2 pt-0 bg-transparent border-l-2 border-solid font-thunderLight tracking-wider text-lg border-gray-500 text-gray-500  text-center whitespace-nowrap hover:text-teal-500  transition ease-in-out delay-150p'
                                }
                                onClick={() => setActiveTabId(2)}
                                tabIndex={activeTabId === 2 ? 0 : -1}
                                aria-selected={activeTabId === 2}
                                aria-controls={`panel-${2}`}
                            >
                                <span>SONDA</span>
                            </button>
                            <button
                                id='tab-3'
                                role='tab'
                                className={
                                    activeTabId === 3
                                        ? 'flex items-center w-full h-10 px-20 pb-2 pt-0 bg-transparent border-l-2 border-solid font-thunderMedium tracking-widest text-lg border-teal-500 text-teal-500 text-center whitespace-nowrap sm:scale-110'
                                        : 'flex items-center w-full h-10 px-20 pb-2 pt-0 bg-transparent border-l-2 border-solid font-thunderLight tracking-wider text-lg border-gray-500 text-gray-500  text-center whitespace-nowrap hover:text-teal-500 transition ease-in-out delay-150p'
                                }
                                onClick={() => setActiveTabId(3)}
                                tabIndex={activeTabId === 3 ? 0 : -1}
                                aria-selected={activeTabId === 3}
                                aria-controls={`panel-${3}`}
                            >
                                <span>Coppex</span>
                            </button>
                        </div>
                        <div className='relative ml-5'>
                            <div
                                id={`panel-${1}`}
                                role='tabpanel'
                                tabIndex={activeTabId === 1 ? 0 : -1}
                                aria-labelledby={`tab-${1}`}
                                aria-hidden={activeTabId !== 1}
                                hidden={activeTabId !== 1}
                                className='w-full h-auto py-3 px-1'
                            >
                                <h3 className='mb-1 text-2xl font-medium leading-5 font-thunderMedium tracking-wide'>
                                    <span>
                                        Ingeniero Informatico
                                        <br />
                                        <a
                                            className='sm:inline-block relative text-teal-500 leading-none my-2 transition hover:scale-105'
                                            href='http://www.yumbel.cl/'
                                            rel='noreferrer noopener'
                                        >
                                            @Departamento de Salud, Municipalidad de Yumbel
                                        </a>
                                    </span>
                                </h3>
                                <p className='mb-5 text-xs text-gray-600'>Enero - Marzo 2019</p>
                                <p className='py-5 text-md leading-7 tracking-wide'>
                                    Toma de requerimientos y desarrollo de sitio web para el
                                    Centro de Salud Familiar y el Departamento de Salud de la
                                    Municipalidad de Yumbel, cuyo objetivo es administrar y
                                    controlar las solicitudes de compra que emiten los
                                    funcionarios de éste establecimiento al Departamento. La
                                    aplicación web fue desarrollada con el framework Laravel
                                    basado en las funciones básicas CRUD.
                                </p>
                                <div>
                                    <ul className='text-md tracking-wide list-disc'>
                                        <li className='py-2'>
                                            Implementar el sitio web para optimizar las solicitudes de
                                            compra de instrumentos de medicina, necesarias para el
                                            Centro de Salud Familiar.
                                        </li>
                                        <li className='py-2'>
                                            Comunicar directamente y de manera segura al Departamento
                                            de Salud y el Centro de Salud Familiar, reemplazando a
                                            aplicación de mensajería.
                                        </li>
                                        <li className='py-2'>
                                            Desarrollar el sitio web de manera escalable y trazable,
                                            para abarcar las distintas Postas que dependen del Centro
                                            de Salud Familiar y de la Municipalidad.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                id={`panel-${2}`}
                                role='tabpanel'
                                tabIndex={activeTabId === 2 ? 0 : -1}
                                aria-labelledby={`tab-${2}`}
                                aria-hidden={activeTabId !== 2}
                                hidden={activeTabId !== 2}
                                className='w-full h-auto py-3 px-1'
                            >
                                <h3 className='mb-1 text-2xl font-medium leading-5 font-thunderMedium tracking-wide'>
                                    <span>
                                        Desarrollador / Consultor de Implementacion
                                        <br />
                                        <a
                                            className='sm:inline-block relative text-teal-500 leading-none my-2 transition hover:scale-105'
                                            href='http://www.yumbel.cl/'
                                            rel='noreferrer noopener'
                                        >
                                            @SONDA
                                        </a>
                                    </span>
                                </h3>
                                <p className='mb-5 text-xs text-gray-600'>Marzo - Agosto 2021</p>
                                <p className='py-5 text-md leading-7 tracking-wide'>
                                    A cargo de proyecto de productividad de técnicos de clientes.
                                    Inventariado de tickets en Excel, análisis y maquetación de
                                    datos con herramienta Power Bi y optimización de procesos.
                                    Mantenimiento de aplicaciones web desarrolladas con framework
                                    ASP .NET MVC. Participación en proyecto de migración de base
                                    de datos para cliente de SONDA. Migración de procedimientos
                                    almacenados desde SQL Server 2008 a SQL Server 2018,
                                    optimización, mejoras y adaptación de estos a la versión más
                                    reciente del motor de base de datos.
                                </p>
                                <div>
                                    <ul className='text-md tracking-wide list-disc p-0 m-0'>
                                        <li className='py-2'>
                                            Optimizar la carga de datos en la base de datos de tickets
                                            de técnicos. Se implementaron Macros en base de datos
                                            Excel para automatizar la carga de información.
                                        </li>
                                        <li className='py-2'>
                                            Solicitar información de todos los técnicos vigentes y no
                                            vigentes a todos los Jefes de Servicio, para la
                                            reestructuración de su información.
                                        </li>
                                        <li className='py-2'>
                                            Finalizar sitio web en desarrollo para cliente,
                                            implementado con ASP .NET MVC
                                        </li>
                                        <li className='py-2'>
                                            Crear API's para extraer información de base de datos y
                                            consumirlas en Power Bi.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                id={`panel-${3}`}
                                role='tabpanel'
                                tabIndex={activeTabId === 3 ? 0 : -1}
                                aria-labelledby={`tab-${3}`}
                                aria-hidden={activeTabId !== 3}
                                hidden={activeTabId !== 3}
                                className='w-full h-auto py-3 px-1'
                            >
                                <h3 className='mb-1 text-2xl font-medium leading-5 font-thunderMedium tracking-wide'>
                                    <span>
                                        Desarrollador Full-Stack
                                        <br />
                                        <a
                                            className='sm:inline-block relative text-teal-500 leading-none my-2 transition hover:scale-105'
                                            href='http://web.coppex.cl/'
                                            rel='noreferrer noopener'
                                        >
                                            @Coppex
                                        </a>
                                    </span>
                                </h3>
                                <p className='mb-5 text-xs text-gray-600'>Junio - Agosto 2022</p>
                                <p className='py-5 text-md leading-7 tracking-wide'>
                                    Desarrollo de pagina web para empresa Coppex. El objetivo era
                                    desarrollar una pagina web que reuniera toda la informacion de
                                    la empresa desde su historia, hasta el servicio que presta,
                                    representaciones que posee y clientes que ha tenido a lo largo
                                    de su trayectoria.
                                </p>
                                <div>
                                    <ul className='text-md tracking-wide list-disc p-0 m-0'>
                                        <li className='py-2'>
                                            Desarrollar front-end con NextJS, TailwindCSS y GraphQL y
                                            ApolloClient para las llamadas a la API.
                                        </li>
                                        <li className='py-2'>
                                            Utilizar las Serverless Functions que brinda NextJS, junto
                                            con Prisma y GraphQL para optimizar tiempo de desarrollo.
                                        </li>
                                        <li className='py-2'>
                                            Crear panel de administracion para la gestion del
                                            contenido de la pagina web.
                                        </li>
                                        <li className='py-2'>
                                            Utilizar integraciones como AWS S3 para almacenar imagenes
                                            y archivos, Auth0 para la autenticacion del usuario
                                            administrador y SendGrid como servicio de email para la
                                            seccion de contacto.
                                        </li>
                                        <li className='py-2'>
                                            Utilizar Railway como host para la base de datos.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkClients
