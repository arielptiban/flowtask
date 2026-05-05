"use client";

import { useState } from "react";
import { users } from "./users.data";

export default function UsersTable() {
    const [search, setSearch] = useState("");

    const filteredUsers = users.filter((user) =>
        `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="overflow-hidden rounded-2xl border border-(--border-soft) bg-(--bg-surface)">
            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-(--border-soft) px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <h2 className="text-sm font-semibold text-(--text-main)">Miembros</h2>

                    <span className="rounded-full border border-(--border-soft) px-2 py-0.5 text-xs text-(--text-muted)">
                        {filteredUsers.length} usuarios
                    </span>
                </div>

                <div className="relative w-full sm:max-w-xs">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)">
                        <span className="icon-[akar-icons--search]" />
                    </span>

                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border border-(--border-soft) bg-(--bg-main) py-2 pl-9 pr-3 text-sm text-(--text-main) placeholder:text-(--text-muted) focus:outline-none focus:ring-1 focus:ring-(--accent)"
                    />
                </div>
            </div>

            {/* Mobile list */}
            <div className="sm:hidden">
                {filteredUsers.map((user) => (
                    <div
                        key={user.email}
                        className="flex items-center justify-between gap-4 border-b border-(--border-soft) px-5 py-4 last:border-b-0"
                    >
                        <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--bg-elevated) text-xs font-semibold text-(--accent)">
                                {user.initials}
                            </div>

                            <p className="truncate text-sm font-medium text-(--text-main)">
                                {user.name}
                            </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-1">
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) transition hover:bg-(--bg-main) hover:text-(--text-main)">
                                <span className="icon-[akar-icons--edit] text-lg" />
                            </button>

                            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) transition hover:bg-red-500/10 hover:text-red-400">
                                <span className="icon-[akar-icons--trash-can] text-lg" />
                            </button>
                        </div>
                    </div>
                ))}

                {filteredUsers.length === 0 && (
                    <div className="px-5 py-10 text-center text-sm text-(--text-muted)">
                        No se encontraron usuarios.
                    </div>
                )}
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-x-auto sm:block">
                <table className="w-full text-sm">
                    <thead className="text-left text-xs font-medium text-(--text-muted)">
                        <tr className="border-b border-(--border-soft)">
                            <th className="px-5 py-3">Nombre</th>
                            <th className="px-5 py-3">Estado</th>
                            <th className="px-5 py-3">Rol</th>
                            <th className="px-5 py-3">Email</th>
                            <th className="px-5 py-3">Equipo</th>
                            <th className="px-5 py-3 text-right">Acciones</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-(--border-soft)">
                        {filteredUsers.map((user) => (
                            <tr key={user.email} className="transition hover:bg-(--bg-elevated)">
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--bg-elevated) text-xs font-semibold text-(--accent)">
                                            {user.initials}
                                        </div>

                                        <div>
                                            <p className="whitespace-nowrap font-medium text-(--text-main)">
                                                {user.name}
                                            </p>
                                            <p className="text-xs text-(--text-muted)">{user.team}</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-4">
                                    <span
                                        className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs ${user.status === "Activo"
                                                ? "bg-green-500/10 text-green-400"
                                                : "bg-slate-500/10 text-(--text-muted)"
                                            }`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${user.status === "Activo"
                                                    ? "bg-green-400"
                                                    : "bg-(--text-subtle)"
                                                }`}
                                        />
                                        {user.status}
                                    </span>
                                </td>

                                <td className="whitespace-nowrap px-5 py-4 text-(--text-main)">
                                    {user.role}
                                </td>

                                <td className="whitespace-nowrap px-5 py-4 text-(--text-muted)">
                                    {user.email}
                                </td>

                                <td className="px-5 py-4">
                                    <span className="rounded-lg border border-(--border-soft) px-2 py-1 text-xs text-(--text-muted)">
                                        {user.team}
                                    </span>
                                </td>

                                <td className="px-5 py-4">
                                    <div className="flex justify-end gap-1">
                                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) transition hover:bg-(--bg-main) hover:text-(--text-main)">
                                            <span className="icon-[akar-icons--edit] text-lg" />
                                        </button>

                                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) transition hover:bg-red-500/10 hover:text-red-400">
                                            <span className="icon-[akar-icons--trash-can] text-lg" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {filteredUsers.length === 0 && (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-5 py-10 text-center text-sm text-(--text-muted)"
                                >
                                    No se encontraron usuarios.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-(--border-soft) px-5 py-4">
                <p className="text-xs text-(--text-muted)">
                    Mostrando {filteredUsers.length === 0 ? 0 : 1}-{filteredUsers.length} de{" "}
                    {filteredUsers.length}
                </p>

                <div className="hidden items-center gap-2 sm:flex">
                    <button className="rounded-lg border border-(--border-soft) px-3 py-1.5 text-xs text-(--text-muted) transition hover:bg-(--bg-elevated) hover:text-(--text-main)">
                        Anterior
                    </button>

                    <button className="rounded-lg border border-(--border-soft) px-3 py-1.5 text-xs text-(--text-muted) transition hover:bg-(--bg-elevated) hover:text-(--text-main)">
                        Siguiente
                    </button>
                </div>
            </div>
        </section>
        // <section className="overflow-hidden rounded-2xl border border-(--border-soft) bg-(--bg-surface)">
        //     {/* Header */}
        //     <div className="flex flex-col gap-4 border-b border-(--border-soft) px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        //         <div className="flex items-center gap-3">
        //             <h2 className="text-sm font-semibold text-(--text-main)">
        //                 Miembros
        //             </h2>

        //             <span className="rounded-full border border-(--border-soft) px-2 py-0.5 text-xs text-(--text-muted)">
        //                 {filteredUsers.length} usuarios
        //             </span>
        //         </div>

        //         {/* Search */}
        //         <div className="relative w-full sm:max-w-xs">
        //             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)">
        //                 <span className="icon-[akar-icons--search]" />
        //             </span>

        //             <input
        //                 type="text"
        //                 placeholder="Buscar..."
        //                 value={search}
        //                 onChange={(e) => setSearch(e.target.value)}
        //                 className="w-full rounded-xl border border-(--border-soft) bg-(--bg-main) py-2 pl-9 pr-3 text-sm text-(--text-main) placeholder:text-(--text-muted) focus:outline-none focus:ring-1 focus:ring-(--accent)"
        //             />
        //         </div>
        //     </div>

        //     {/* Table */}
        //     <div className="overflow-x-auto">
        //         <table className="w-full min-w-[700px] text-sm">
        //             {/* Header columns */}
        //             <thead className="hidden text-left text-xs font-medium text-(--text-muted) sm:table-header-group">
        //                 <tr className="border-b border-(--border-soft)">
        //                     <th className="px-5 py-3">Nombre</th>
        //                     <th className="px-5 py-3">Rol</th>
        //                     <th className="px-5 py-3">Estado</th>
        //                     <th className="px-5 py-3">Email</th>
        //                     <th className="px-5 py-3">Equipo</th>
        //                     <th className="px-5 py-3 text-right">Acciones</th>
        //                 </tr>
        //             </thead>

        //             <tbody className="divide-y divide-(--border-soft)">
        //                 {filteredUsers.map((user) => (
        //                     <tr
        //                         key={user.email}
        //                         className="transition hover:bg-(--bg-elevated)"
        //                     >
        //                         {/* Nombre */}
        //                         <td className="px-5 py-4">
        //                             <div className="flex items-center justify-between gap-3">
        //                                 <div className="flex items-center gap-3">
        //                                     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--bg-elevated) text-xs font-semibold text-(--accent)">
        //                                         {user.initials}
        //                                     </div>

        //                                     <div>
        //                                         <p className="font-medium text-(--text-main)">
        //                                             {user.name}
        //                                         </p>
        //                                     </div>
        //                                 </div>

        //                                 {/* 👇 Acciones SOLO MOBILE */}
        //                                 <div className="flex gap-1 sm:hidden">
        //                                     <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) hover:bg-(--bg-main)">
        //                                         <span className="icon-[akar-icons--edit]" />
        //                                     </button>

        //                                     <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">
        //                                         <span className="icon-[akar-icons--trash-can]" />
        //                                     </button>
        //                                 </div>
        //                             </div>
        //                         </td>

        //                         {/* Desktop columns */}
        //                         <td className="hidden px-5 py-4 sm:table-cell">
        //                             <span
        //                                 className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs ${user.status === "Activo"
        //                                     ? "bg-green-500/10 text-green-400"
        //                                     : "bg-slate-500/10 text-(--text-muted)"
        //                                     }`}
        //                             >
        //                                 <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        //                                 {user.status}
        //                             </span>
        //                         </td>

        //                         <td className="hidden px-5 py-4 sm:table-cell text-(--text-main)">
        //                             {user.role}
        //                         </td>

        //                         <td className="hidden px-5 py-4 sm:table-cell text-(--text-muted)">
        //                             {user.email}
        //                         </td>

        //                         <td className="hidden px-5 py-4 sm:table-cell">
        //                             <span className="rounded-lg border border-(--border-soft) px-2 py-1 text-xs text-(--text-muted)">
        //                                 {user.team}
        //                             </span>
        //                         </td>

        //                         {/* Acciones DESKTOP */}
        //                         <td className="hidden px-5 py-4 text-right sm:table-cell">
        //                             <div className="flex justify-end gap-1">
        //                                 <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) hover:bg-(--bg-main)">
        //                                     <span className="icon-[akar-icons--edit]" />
        //                                 </button>

        //                                 <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">
        //                                     <span className="icon-[akar-icons--trash-can]" />
        //                                 </button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 ))}

        //                 {/* Empty state */}
        //                 {filteredUsers.length === 0 && (
        //                     <tr>
        //                         <td
        //                             colSpan={6}
        //                             className="px-5 py-10 text-center text-sm text-(--text-muted)"
        //                         >
        //                             No se encontraron usuarios.
        //                         </td>
        //                     </tr>
        //                 )}
        //             </tbody>
        //         </table>
        //     </div>

        //     {/* Pagination */}
        //     <div className="flex items-center justify-between border-t border-(--border-soft) px-5 py-4">
        //         <p className="text-xs text-(--text-muted)">
        //             Mostrando {filteredUsers.length === 0 ? 0 : 1}-{filteredUsers.length} de{" "}
        //             {filteredUsers.length}
        //         </p>

        //         <div className="flex items-center gap-2">
        //             <button className="rounded-lg border border-(--border-soft) px-3 py-1.5 text-xs text-(--text-muted) transition hover:bg-(--bg-elevated) hover:text-(--text-main)">
        //                 Anterior
        //             </button>

        //             <button className="rounded-lg border border-(--border-soft) px-3 py-1.5 text-xs text-(--text-muted) transition hover:bg-(--bg-elevated) hover:text-(--text-main)">
        //                 Siguiente
        //             </button>
        //         </div>
        //     </div>
        // </section>
        // <section className="overflow-hidden rounded-2xl border border-(--border-soft) bg-(--bg-surface)">
        //     {/* Header */}
        //     <div className="flex items-center justify-between border-b border-(--border-soft) px-5 py-4">
        //         <div className="flex items-center gap-3">
        //             <h2 className="text-sm font-semibold text-(--text-main)">
        //                 Miembros
        //             </h2>

        //             <span className="rounded-full border border-(--border-soft) px-2 py-0.5 text-xs text-(--text-muted)">
        //                 {filteredUsers.length} usuarios
        //             </span>
        //         </div>

        //         {/* Search */}
        //         <div className="relative w-full max-w-xs">
        //             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)">
        //                 <span className="icon-[akar-icons--search]" />
        //             </span>

        //             <input
        //                 type="text"
        //                 placeholder="Buscar..."
        //                 value={search}
        //                 onChange={(e) => setSearch(e.target.value)}
        //                 className="w-full rounded-xl border border-(--border-soft) bg-(--bg-main) py-2 pl-9 pr-3 text-sm text-(--text-main) placeholder:text-(--text-muted) focus:outline-none focus:ring-1 focus:ring-(--accent)"
        //             />
        //         </div>
        //     </div>

        //     {/* Table */}
        //     <div className="overflow-x-auto">
        //         <table className="w-full min-w-[850px] text-sm">
        //             <thead className="text-left text-xs font-medium text-(--text-muted)">
        //                 <tr className="border-b border-(--border-soft)">
        //                     <th className="px-5 py-3">Nombre</th>
        //                     <th className="px-5 py-3">Estado</th>
        //                     <th className="px-5 py-3">Rol</th>
        //                     <th className="px-5 py-3">Email</th>
        //                     <th className="px-5 py-3">Equipo</th>
        //                     <th className="px-5 py-3 text-right">Acciones</th>
        //                 </tr>
        //             </thead>

        //             <tbody className="divide-y divide-(--border-soft)">
        //                 {filteredUsers.map((user) => (
        //                     <tr
        //                         key={user.email}
        //                         className="transition hover:bg-(--bg-elevated)"
        //                     >
        //                         <td className="px-5 py-4">
        //                             <div className="flex items-center gap-3">
        //                                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--bg-elevated) text-xs font-semibold text-(--accent)">
        //                                     {user.initials}
        //                                 </div>

        //                                 <div>
        //                                     <p className="whitespace-nowrap font-medium text-(--text-main)">
        //                                         {user.name}
        //                                     </p>
        //                                     <p className="text-xs text-(--text-muted)">
        //                                         {user.team}
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                         </td>

        //                         <td className="px-5 py-4">
        //                             <span
        //                                 className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${user.status === "Activo"
        //                                     ? "bg-green-500/10 text-green-400"
        //                                     : "bg-slate-500/10 text-(--text-muted)"
        //                                     }`}
        //                             >
        //                                 <span
        //                                     className={`h-1.5 w-1.5 rounded-full ${user.status === "Activo"
        //                                         ? "bg-green-400"
        //                                         : "bg-(--text-subtle)"
        //                                         }`}
        //                                 />
        //                                 {user.status}
        //                             </span>
        //                         </td>

        //                         <td className="whitespace-nowrap px-5 py-4 text-(--text-main)">
        //                             {user.role}
        //                         </td>

        //                         <td className="whitespace-nowrap px-5 py-4 text-(--text-muted)">
        //                             {user.email}
        //                         </td>

        //                         <td className="px-5 py-4">
        //                             <span className="rounded-lg border border-(--border-soft) px-2 py-1 text-xs text-(--text-muted)">
        //                                 {user.team}
        //                             </span>
        //                         </td>

        //                         <td className="px-5 py-4">
        //                             <div className="flex justify-end gap-1">
        //                                 <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) transition hover:bg-(--bg-main) hover:text-(--text-main)">
        //                                     <span className="icon-[akar-icons--edit] text-lg" />
        //                                 </button>

        //                                 <button className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-muted) transition hover:bg-red-500/10 hover:text-red-400">
        //                                     <span className="icon-[akar-icons--trash-can] text-lg" />
        //                                 </button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 ))}

        //                 {filteredUsers.length === 0 && (
        //                     <tr>
        //                         <td
        //                             colSpan={6}
        //                             className="px-5 py-10 text-center text-sm text-(--text-muted)"
        //                         >
        //                             No se encontraron usuarios.
        //                         </td>
        //                     </tr>
        //                 )}
        //             </tbody>
        //         </table>
        //     </div>

        //     {/* Pagination */}
        //     <div className="flex items-center justify-between border-t border-(--border-soft) px-5 py-4">
        //         <p className="text-xs text-(--text-muted)">
        //             Mostrando {filteredUsers.length === 0 ? 0 : 1}-{filteredUsers.length}{" "}
        //             de {filteredUsers.length}
        //         </p>

        //         <div className="flex items-center gap-2">
        //             <button className="rounded-lg border border-(--border-soft) px-3 py-1.5 text-xs text-(--text-muted) transition hover:bg-(--bg-elevated) hover:text-(--text-main)">
        //                 Anterior
        //             </button>

        //             <button className="rounded-lg border border-(--border-soft) px-3 py-1.5 text-xs text-(--text-muted) transition hover:bg-(--bg-elevated) hover:text-(--text-main)">
        //                 Siguiente
        //             </button>
        //         </div>
        //     </div>
        // </section>
    );
}