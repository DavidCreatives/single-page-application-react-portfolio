# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


    const projectList = data ?? [];

    return (
        <div className="m-10 border-1 rounded-xl">
            <div className="m-10 border-b-1 flex pb-10">
                <input 
                    type="text"
                    placeholder="Search Projects"
                    className="border-1 flex w-xl rounded-xl h-10 p-3"
                />
            </div>
            <ul>
                {/* Map over the array safely */}
                {projectList.map((item, index) => (
                    <li key={index}>{item.name || JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
}