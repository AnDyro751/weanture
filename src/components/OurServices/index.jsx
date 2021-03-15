import {useState} from 'react';

export default function OurServices({}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="w-full mb-12">
            <div className="w-11/12 mx-auto flex flex-wrap">
                <div className="w-full flex flex-wrap items-center">
                    <div className="w-full">
                        <h3 className="text-2xl font-medium font-title">A smile is the universal welcome.</h3>
                    </div>
                    <div className="w-full">
                        <h4 className="text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi dignissimos dolores
                            doloribus.
                        </h4>
                    </div>
                </div>
                <div className="grid grid-cols-12 w-full -mx-2 -my-4 mt-8">
                    <Service
                        name={`Optimización SEO`}
                        image={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzVkNjJkNyI+PHBhdGggZD0iTTc0LjUzMzMzLDE3LjJjLTMxLjU5NjQyLDAgLTU3LjMzMzMzLDI1LjczNjkyIC01Ny4zMzMzMyw1Ny4zMzMzM2MwLDMxLjU5NjQyIDI1LjczNjkyLDU3LjMzMzMzIDU3LjMzMzMzLDU3LjMzMzMzYzEzLjczOTk4LDAgMjYuMzU4MzQsLTQuODc5MTUgMzYuMjQ3NjYsLTEyLjk3ODM5bDM0LjIzMjAzLDM0LjIzMjAzYzEuNDM4MDIsMS40OTc3OCAzLjU3MzQsMi4xMDExMyA1LjU4MjYsMS41NzczNWMyLjAwOTIsLTAuNTIzNzggMy41NzgyNiwtMi4wOTI4NCA0LjEwMjA0LC00LjEwMjA0YzAuNTIzNzgsLTIuMDA5MiAtMC4wNzk1NywtNC4xNDQ1OCAtMS41NzczNSwtNS41ODI2bC0zNC4yMzIwMywtMzQuMjMyMDNjOC4wOTkyNCwtOS44ODkzMiAxMi45NzgzOSwtMjIuNTA3NjggMTIuOTc4MzksLTM2LjI0NzY2YzAsLTMxLjU5NjQyIC0yNS43MzY5MiwtNTcuMzMzMzMgLTU3LjMzMzMzLC01Ny4zMzMzM3pNNzQuNTMzMzMsMjguNjY2NjdjMjUuMzk5MzcsMCA0NS44NjY2NywyMC40NjczIDQ1Ljg2NjY3LDQ1Ljg2NjY3YzAsMjUuMzk5MzcgLTIwLjQ2NzI5LDQ1Ljg2NjY3IC00NS44NjY2Nyw0NS44NjY2N2MtMjUuMzk5MzcsMCAtNDUuODY2NjcsLTIwLjQ2NzI5IC00NS44NjY2NywtNDUuODY2NjdjMCwtMjUuMzk5MzcgMjAuNDY3MywtNDUuODY2NjcgNDUuODY2NjcsLTQ1Ljg2NjY3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"}
                    />
                    <Service
                        name={`E-Commerce`}
                        image={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzVkNjJkNyI+PHBhdGggZD0iTTg2LDI2Ljg3NWwtMjYuNzA3MDMsMjYuNzA3MDNsMC4xNjc5NywwLjE2Nzk3aC0wLjMzNTk0bDIuNjg3NSwxMC43NWg3My40MDIzNGwtMTAuMjQ2MDksMzcuNjI1aC02MS42NDQ1M2wtMTQuMTA5MzcsLTU2LjQzNzVjLTEuMTk2NzgsLTQuNzg3MTEgLTUuNDc5OTgsLTguMDYyNSAtMTAuNDE0MDYsLTguMDYyNWgtMTEuOTI1NzhjLTIuOTYwNDUsMCAtNS4zNzUsMi40MTQ1NSAtNS4zNzUsNS4zNzVjMCwyLjk2MDQ1IDIuNDE0NTUsNS4zNzUgNS4zNzUsNS4zNzVoMTEuOTI1NzhsMTQuMTA5MzgsNTYuNDM3NWMxLjE5Njc4LDQuNzg3MTEgNS40Nzk5OCw4LjA2MjUgMTAuNDE0MDYsOC4wNjI1aDYxLjY0NDUzYzQuODUwMSwwIDguOTY1MzMsLTMuMjEyNCAxMC4yNDYwOSwtNy44OTQ1M2wxMy45NDE0MSwtNTEuMjMwNDdoLTkuNDA2MjVsLTI2Ljg3NSwtMjYuODc1bC0xMy40Mzc1LDEzLjQzNzV6TTExOC4yNSwxMTIuODc1Yy04LjgzOTM1LDAgLTE2LjEyNSw3LjI4NTY1IC0xNi4xMjUsMTYuMTI1YzAsOC44MzkzNSA3LjI4NTY1LDE2LjEyNSAxNi4xMjUsMTYuMTI1YzguODM5MzUsMCAxNi4xMjUsLTcuMjg1NjUgMTYuMTI1LC0xNi4xMjVjMCwtOC44MzkzNSAtNy4yODU2NSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNXpNNjkuODc1LDExMi44NzVjLTguODM5MzUsMCAtMTYuMTI1LDcuMjg1NjUgLTE2LjEyNSwxNi4xMjVjMCw4LjgzOTM1IDcuMjg1NjUsMTYuMTI1IDE2LjEyNSwxNi4xMjVjOC44MzkzNSwwIDE2LjEyNSwtNy4yODU2NSAxNi4xMjUsLTE2LjEyNWMwLC04LjgzOTM1IC03LjI4NTY1LC0xNi4xMjUgLTE2LjEyNSwtMTYuMTI1ek04Niw0Mi4xNjAxNmwxMS43NTc4MSwxMS41ODk4NGgtMjMuMzQ3NjZ6TTExMi44NzUsNDIuMTYwMTZsMTEuNTg5ODQsMTEuNTg5ODRoLTExLjU4OTg0bC01LjcxMDk0LC01LjcxMDk0ek02OS44NzUsMTIzLjYyNWMzLjAyMzQ0LDAgNS4zNzUsMi4zNTE1NiA1LjM3NSw1LjM3NWMwLDMuMDIzNDQgLTIuMzUxNTYsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyMzQ0LDAgLTUuMzc1LC0yLjM1MTU2IC01LjM3NSwtNS4zNzVjMCwtMy4wMjM0NCAyLjM1MTU2LC01LjM3NSA1LjM3NSwtNS4zNzV6TTExOC4yNSwxMjMuNjI1YzMuMDIzNDQsMCA1LjM3NSwyLjM1MTU2IDUuMzc1LDUuMzc1YzAsMy4wMjM0NCAtMi4zNTE1Niw1LjM3NSAtNS4zNzUsNS4zNzVjLTMuMDIzNDQsMCAtNS4zNzUsLTIuMzUxNTYgLTUuMzc1LC01LjM3NWMwLC0zLjAyMzQ0IDIuMzUxNTYsLTUuMzc1IDUuMzc1LC01LjM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="}
                    />
                    <Service
                        name={`Seguridad`}
                        image={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzVkNjJkNyI+PHBhdGggZD0iTTEwNy41LDE2LjEyNWMtMjYuNTgxMDUsMCAtNDguMzc1LDIxLjc5Mzk1IC00OC4zNzUsNDguMzc1YzAsMi43OTI0OCAwLjQ2MTkyLDUuMjQ5MDMgMC44Mzk4NCw3LjcyNjU2bC00Mi4zMjgxMiw0Mi4xNjAxNmwtMS41MTE3MiwxLjY3OTY5djM5LjgwODU5aDM3LjYyNXYtMTYuMTI1aDE2LjEyNXYtMTYuMTI1aDE2LjEyNXYtMTUuOTU3MDNjNi4zNDA4MiwzLjEwNzQyIDEzLjczMTQ1LDUuMjA3MDMgMjEuNSw1LjIwNzAzYzI2LjU4MTA2LDAgNDguMzc1LC0yMS43OTM5NCA0OC4zNzUsLTQ4LjM3NWMwLC0yNi41ODEwNSAtMjEuNzkzOTQsLTQ4LjM3NSAtNDguMzc1LC00OC4zNzV6TTEwNy41LDI2Ljg3NWMyMC43MjMxNSwwIDM3LjYyNSwxNi45MDE4NSAzNy42MjUsMzcuNjI1YzAsMjAuNzIzMTUgLTE2LjkwMTg1LDM3LjYyNSAtMzcuNjI1LDM3LjYyNWMtNi41MDg3OSwwIC0xMy4yMDY1NCwtMS45MTA2NSAtMTguMzA4NTksLTQuNzAzMTJsLTEuMzQzNzUsLTAuNjcxODdoLTEyLjU5NzY2djE2LjEyNWgtMTYuMTI1djE2LjEyNWgtMTYuMTI1djE2LjEyNWgtMTYuMTI1di0yNC41MjM0NGw0Mi40OTYwOSwtNDIuNjY0MDZsMi4wMTU2MywtMS44NDc2NmwtMC41MDM5MSwtMi44NTU0N2MtMC41NDU5LC0zLjIzMzQgLTEuMDA3ODEsLTYuMTA5ODYgLTEuMDA3ODEsLTguNzM0MzdjMCwtMjAuNzIzMTUgMTYuOTAxODUsLTM3LjYyNSAzNy42MjUsLTM3LjYyNXpNMTE4LjI1LDQzYy01Ljk0MTksMCAtMTAuNzUsNC44MDgxIC0xMC43NSwxMC43NWMwLDUuOTQxOSA0LjgwODEsMTAuNzUgMTAuNzUsMTAuNzVjNS45NDE5LDAgMTAuNzUsLTQuODA4MSAxMC43NSwtMTAuNzVjMCwtNS45NDE5IC00LjgwODEsLTEwLjc1IC0xMC43NSwtMTAuNzV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="}
                    />
                    <Service
                        name={`Privacidad`}
                        image={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzVkNjJkNyI+PHBhdGggZD0iTTg2LDcuMTY2NjdsLTY0LjUsMjguNjY2Njd2NDNjMCw1Ni4xMTUgNDYuMTQ2MTcsODIuMzE2MzMgNjQuNSw4NmMxOC4zNTM4MywtMy42ODM2NyA2NC41LC0yOS44ODUgNjQuNSwtODZ2LTQzek04NiwyMi44NTc3NWw1MC4xNjY2NywyMi4yOTc4NXYzMy42Nzc3M2MwLDQzLjk2MDMzIC0zNC4yOTI1LDY2LjMyMzkyIC01MC4xNjY2Nyw3MS4yMTg3NWMtMTUuODc0MTcsLTQuODk0ODMgLTUwLjE2NjY3LC0yNy4yNTg0MiAtNTAuMTY2NjcsLTcxLjIxODc1di0zMy42Nzc3M3pNNzguODMzMzMsNDN2NTcuMzMzMzNoMTQuMzMzMzN2LTU3LjMzMzMzek03OC44MzMzMywxMTQuNjY2Njd2MTQuMzMzMzNoMTQuMzMzMzN2LTE0LjMzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"}
                    />

                    {
                        open &&
                        <>
                            <Service
                                name={`Estrategia digital`}
                                image={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzVkNjJkNyI+PHBhdGggZD0iTTg2LDI2Ljg3NWwtMjYuNzA3MDMsMjYuNzA3MDNsMC4xNjc5NywwLjE2Nzk3aC0wLjMzNTk0bDIuNjg3NSwxMC43NWg3My40MDIzNGwtMTAuMjQ2MDksMzcuNjI1aC02MS42NDQ1M2wtMTQuMTA5MzcsLTU2LjQzNzVjLTEuMTk2NzgsLTQuNzg3MTEgLTUuNDc5OTgsLTguMDYyNSAtMTAuNDE0MDYsLTguMDYyNWgtMTEuOTI1NzhjLTIuOTYwNDUsMCAtNS4zNzUsMi40MTQ1NSAtNS4zNzUsNS4zNzVjMCwyLjk2MDQ1IDIuNDE0NTUsNS4zNzUgNS4zNzUsNS4zNzVoMTEuOTI1NzhsMTQuMTA5MzgsNTYuNDM3NWMxLjE5Njc4LDQuNzg3MTEgNS40Nzk5OCw4LjA2MjUgMTAuNDE0MDYsOC4wNjI1aDYxLjY0NDUzYzQuODUwMSwwIDguOTY1MzMsLTMuMjEyNCAxMC4yNDYwOSwtNy44OTQ1M2wxMy45NDE0MSwtNTEuMjMwNDdoLTkuNDA2MjVsLTI2Ljg3NSwtMjYuODc1bC0xMy40Mzc1LDEzLjQzNzV6TTExOC4yNSwxMTIuODc1Yy04LjgzOTM1LDAgLTE2LjEyNSw3LjI4NTY1IC0xNi4xMjUsMTYuMTI1YzAsOC44MzkzNSA3LjI4NTY1LDE2LjEyNSAxNi4xMjUsMTYuMTI1YzguODM5MzUsMCAxNi4xMjUsLTcuMjg1NjUgMTYuMTI1LC0xNi4xMjVjMCwtOC44MzkzNSAtNy4yODU2NSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNXpNNjkuODc1LDExMi44NzVjLTguODM5MzUsMCAtMTYuMTI1LDcuMjg1NjUgLTE2LjEyNSwxNi4xMjVjMCw4LjgzOTM1IDcuMjg1NjUsMTYuMTI1IDE2LjEyNSwxNi4xMjVjOC44MzkzNSwwIDE2LjEyNSwtNy4yODU2NSAxNi4xMjUsLTE2LjEyNWMwLC04LjgzOTM1IC03LjI4NTY1LC0xNi4xMjUgLTE2LjEyNSwtMTYuMTI1ek04Niw0Mi4xNjAxNmwxMS43NTc4MSwxMS41ODk4NGgtMjMuMzQ3NjZ6TTExMi44NzUsNDIuMTYwMTZsMTEuNTg5ODQsMTEuNTg5ODRoLTExLjU4OTg0bC01LjcxMDk0LC01LjcxMDk0ek02OS44NzUsMTIzLjYyNWMzLjAyMzQ0LDAgNS4zNzUsMi4zNTE1NiA1LjM3NSw1LjM3NWMwLDMuMDIzNDQgLTIuMzUxNTYsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyMzQ0LDAgLTUuMzc1LC0yLjM1MTU2IC01LjM3NSwtNS4zNzVjMCwtMy4wMjM0NCAyLjM1MTU2LC01LjM3NSA1LjM3NSwtNS4zNzV6TTExOC4yNSwxMjMuNjI1YzMuMDIzNDQsMCA1LjM3NSwyLjM1MTU2IDUuMzc1LDUuMzc1YzAsMy4wMjM0NCAtMi4zNTE1Niw1LjM3NSAtNS4zNzUsNS4zNzVjLTMuMDIzNDQsMCAtNS4zNzUsLTIuMzUxNTYgLTUuMzc1LC01LjM3NWMwLC0zLjAyMzQ0IDIuMzUxNTYsLTUuMzc1IDUuMzc1LC01LjM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="}
                            />
                            <Service
                                name={`UI/UX design`}
                                image={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzVkNjJkNyI+PHBhdGggZD0iTTg2LDI2Ljg3NWwtMjYuNzA3MDMsMjYuNzA3MDNsMC4xNjc5NywwLjE2Nzk3aC0wLjMzNTk0bDIuNjg3NSwxMC43NWg3My40MDIzNGwtMTAuMjQ2MDksMzcuNjI1aC02MS42NDQ1M2wtMTQuMTA5MzcsLTU2LjQzNzVjLTEuMTk2NzgsLTQuNzg3MTEgLTUuNDc5OTgsLTguMDYyNSAtMTAuNDE0MDYsLTguMDYyNWgtMTEuOTI1NzhjLTIuOTYwNDUsMCAtNS4zNzUsMi40MTQ1NSAtNS4zNzUsNS4zNzVjMCwyLjk2MDQ1IDIuNDE0NTUsNS4zNzUgNS4zNzUsNS4zNzVoMTEuOTI1NzhsMTQuMTA5MzgsNTYuNDM3NWMxLjE5Njc4LDQuNzg3MTEgNS40Nzk5OCw4LjA2MjUgMTAuNDE0MDYsOC4wNjI1aDYxLjY0NDUzYzQuODUwMSwwIDguOTY1MzMsLTMuMjEyNCAxMC4yNDYwOSwtNy44OTQ1M2wxMy45NDE0MSwtNTEuMjMwNDdoLTkuNDA2MjVsLTI2Ljg3NSwtMjYuODc1bC0xMy40Mzc1LDEzLjQzNzV6TTExOC4yNSwxMTIuODc1Yy04LjgzOTM1LDAgLTE2LjEyNSw3LjI4NTY1IC0xNi4xMjUsMTYuMTI1YzAsOC44MzkzNSA3LjI4NTY1LDE2LjEyNSAxNi4xMjUsMTYuMTI1YzguODM5MzUsMCAxNi4xMjUsLTcuMjg1NjUgMTYuMTI1LC0xNi4xMjVjMCwtOC44MzkzNSAtNy4yODU2NSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNXpNNjkuODc1LDExMi44NzVjLTguODM5MzUsMCAtMTYuMTI1LDcuMjg1NjUgLTE2LjEyNSwxNi4xMjVjMCw4LjgzOTM1IDcuMjg1NjUsMTYuMTI1IDE2LjEyNSwxNi4xMjVjOC44MzkzNSwwIDE2LjEyNSwtNy4yODU2NSAxNi4xMjUsLTE2LjEyNWMwLC04LjgzOTM1IC03LjI4NTY1LC0xNi4xMjUgLTE2LjEyNSwtMTYuMTI1ek04Niw0Mi4xNjAxNmwxMS43NTc4MSwxMS41ODk4NGgtMjMuMzQ3NjZ6TTExMi44NzUsNDIuMTYwMTZsMTEuNTg5ODQsMTEuNTg5ODRoLTExLjU4OTg0bC01LjcxMDk0LC01LjcxMDk0ek02OS44NzUsMTIzLjYyNWMzLjAyMzQ0LDAgNS4zNzUsMi4zNTE1NiA1LjM3NSw1LjM3NWMwLDMuMDIzNDQgLTIuMzUxNTYsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyMzQ0LDAgLTUuMzc1LC0yLjM1MTU2IC01LjM3NSwtNS4zNzVjMCwtMy4wMjM0NCAyLjM1MTU2LC01LjM3NSA1LjM3NSwtNS4zNzV6TTExOC4yNSwxMjMuNjI1YzMuMDIzNDQsMCA1LjM3NSwyLjM1MTU2IDUuMzc1LDUuMzc1YzAsMy4wMjM0NCAtMi4zNTE1Niw1LjM3NSAtNS4zNzUsNS4zNzVjLTMuMDIzNDQsMCAtNS4zNzUsLTIuMzUxNTYgLTUuMzc1LC01LjM3NWMwLC0zLjAyMzQ0IDIuMzUxNTYsLTUuMzc1IDUuMzc1LC01LjM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="}
                            />
                            <Service
                                name={`Estrategia de contenido`}
                                image={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzVkNjJkNyI+PHBhdGggZD0iTTg2LDI2Ljg3NWwtMjYuNzA3MDMsMjYuNzA3MDNsMC4xNjc5NywwLjE2Nzk3aC0wLjMzNTk0bDIuNjg3NSwxMC43NWg3My40MDIzNGwtMTAuMjQ2MDksMzcuNjI1aC02MS42NDQ1M2wtMTQuMTA5MzcsLTU2LjQzNzVjLTEuMTk2NzgsLTQuNzg3MTEgLTUuNDc5OTgsLTguMDYyNSAtMTAuNDE0MDYsLTguMDYyNWgtMTEuOTI1NzhjLTIuOTYwNDUsMCAtNS4zNzUsMi40MTQ1NSAtNS4zNzUsNS4zNzVjMCwyLjk2MDQ1IDIuNDE0NTUsNS4zNzUgNS4zNzUsNS4zNzVoMTEuOTI1NzhsMTQuMTA5MzgsNTYuNDM3NWMxLjE5Njc4LDQuNzg3MTEgNS40Nzk5OCw4LjA2MjUgMTAuNDE0MDYsOC4wNjI1aDYxLjY0NDUzYzQuODUwMSwwIDguOTY1MzMsLTMuMjEyNCAxMC4yNDYwOSwtNy44OTQ1M2wxMy45NDE0MSwtNTEuMjMwNDdoLTkuNDA2MjVsLTI2Ljg3NSwtMjYuODc1bC0xMy40Mzc1LDEzLjQzNzV6TTExOC4yNSwxMTIuODc1Yy04LjgzOTM1LDAgLTE2LjEyNSw3LjI4NTY1IC0xNi4xMjUsMTYuMTI1YzAsOC44MzkzNSA3LjI4NTY1LDE2LjEyNSAxNi4xMjUsMTYuMTI1YzguODM5MzUsMCAxNi4xMjUsLTcuMjg1NjUgMTYuMTI1LC0xNi4xMjVjMCwtOC44MzkzNSAtNy4yODU2NSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNXpNNjkuODc1LDExMi44NzVjLTguODM5MzUsMCAtMTYuMTI1LDcuMjg1NjUgLTE2LjEyNSwxNi4xMjVjMCw4LjgzOTM1IDcuMjg1NjUsMTYuMTI1IDE2LjEyNSwxNi4xMjVjOC44MzkzNSwwIDE2LjEyNSwtNy4yODU2NSAxNi4xMjUsLTE2LjEyNWMwLC04LjgzOTM1IC03LjI4NTY1LC0xNi4xMjUgLTE2LjEyNSwtMTYuMTI1ek04Niw0Mi4xNjAxNmwxMS43NTc4MSwxMS41ODk4NGgtMjMuMzQ3NjZ6TTExMi44NzUsNDIuMTYwMTZsMTEuNTg5ODQsMTEuNTg5ODRoLTExLjU4OTg0bC01LjcxMDk0LC01LjcxMDk0ek02OS44NzUsMTIzLjYyNWMzLjAyMzQ0LDAgNS4zNzUsMi4zNTE1NiA1LjM3NSw1LjM3NWMwLDMuMDIzNDQgLTIuMzUxNTYsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyMzQ0LDAgLTUuMzc1LC0yLjM1MTU2IC01LjM3NSwtNS4zNzVjMCwtMy4wMjM0NCAyLjM1MTU2LC01LjM3NSA1LjM3NSwtNS4zNzV6TTExOC4yNSwxMjMuNjI1YzMuMDIzNDQsMCA1LjM3NSwyLjM1MTU2IDUuMzc1LDUuMzc1YzAsMy4wMjM0NCAtMi4zNTE1Niw1LjM3NSAtNS4zNzUsNS4zNzVjLTMuMDIzNDQsMCAtNS4zNzUsLTIuMzUxNTYgLTUuMzc1LC01LjM3NWMwLC0zLjAyMzQ0IDIuMzUxNTYsLTUuMzc1IDUuMzc1LC01LjM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="}
                            />
                            <Service
                                name={`Diseño & concepto`}
                                image={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzVkNjJkNyI+PHBhdGggZD0iTTg2LDI2Ljg3NWwtMjYuNzA3MDMsMjYuNzA3MDNsMC4xNjc5NywwLjE2Nzk3aC0wLjMzNTk0bDIuNjg3NSwxMC43NWg3My40MDIzNGwtMTAuMjQ2MDksMzcuNjI1aC02MS42NDQ1M2wtMTQuMTA5MzcsLTU2LjQzNzVjLTEuMTk2NzgsLTQuNzg3MTEgLTUuNDc5OTgsLTguMDYyNSAtMTAuNDE0MDYsLTguMDYyNWgtMTEuOTI1NzhjLTIuOTYwNDUsMCAtNS4zNzUsMi40MTQ1NSAtNS4zNzUsNS4zNzVjMCwyLjk2MDQ1IDIuNDE0NTUsNS4zNzUgNS4zNzUsNS4zNzVoMTEuOTI1NzhsMTQuMTA5MzgsNTYuNDM3NWMxLjE5Njc4LDQuNzg3MTEgNS40Nzk5OCw4LjA2MjUgMTAuNDE0MDYsOC4wNjI1aDYxLjY0NDUzYzQuODUwMSwwIDguOTY1MzMsLTMuMjEyNCAxMC4yNDYwOSwtNy44OTQ1M2wxMy45NDE0MSwtNTEuMjMwNDdoLTkuNDA2MjVsLTI2Ljg3NSwtMjYuODc1bC0xMy40Mzc1LDEzLjQzNzV6TTExOC4yNSwxMTIuODc1Yy04LjgzOTM1LDAgLTE2LjEyNSw3LjI4NTY1IC0xNi4xMjUsMTYuMTI1YzAsOC44MzkzNSA3LjI4NTY1LDE2LjEyNSAxNi4xMjUsMTYuMTI1YzguODM5MzUsMCAxNi4xMjUsLTcuMjg1NjUgMTYuMTI1LC0xNi4xMjVjMCwtOC44MzkzNSAtNy4yODU2NSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNXpNNjkuODc1LDExMi44NzVjLTguODM5MzUsMCAtMTYuMTI1LDcuMjg1NjUgLTE2LjEyNSwxNi4xMjVjMCw4LjgzOTM1IDcuMjg1NjUsMTYuMTI1IDE2LjEyNSwxNi4xMjVjOC44MzkzNSwwIDE2LjEyNSwtNy4yODU2NSAxNi4xMjUsLTE2LjEyNWMwLC04LjgzOTM1IC03LjI4NTY1LC0xNi4xMjUgLTE2LjEyNSwtMTYuMTI1ek04Niw0Mi4xNjAxNmwxMS43NTc4MSwxMS41ODk4NGgtMjMuMzQ3NjZ6TTExMi44NzUsNDIuMTYwMTZsMTEuNTg5ODQsMTEuNTg5ODRoLTExLjU4OTg0bC01LjcxMDk0LC01LjcxMDk0ek02OS44NzUsMTIzLjYyNWMzLjAyMzQ0LDAgNS4zNzUsMi4zNTE1NiA1LjM3NSw1LjM3NWMwLDMuMDIzNDQgLTIuMzUxNTYsNS4zNzUgLTUuMzc1LDUuMzc1Yy0zLjAyMzQ0LDAgLTUuMzc1LC0yLjM1MTU2IC01LjM3NSwtNS4zNzVjMCwtMy4wMjM0NCAyLjM1MTU2LC01LjM3NSA1LjM3NSwtNS4zNzV6TTExOC4yNSwxMjMuNjI1YzMuMDIzNDQsMCA1LjM3NSwyLjM1MTU2IDUuMzc1LDUuMzc1YzAsMy4wMjM0NCAtMi4zNTE1Niw1LjM3NSAtNS4zNzUsNS4zNzVjLTMuMDIzNDQsMCAtNS4zNzUsLTIuMzUxNTYgLTUuMzc1LC01LjM3NWMwLC0zLjAyMzQ0IDIuMzUxNTYsLTUuMzc1IDUuMzc1LC01LjM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="}
                            />
                        </>
                    }

                    <div className="w-full mt-8 col-span-12">
                        <button
                            onClick={handleOpen}
                            className="border-none focus:outline-none w-full py-3 rounded text-sm font-title text-center hover:bg-gray-100 hover:shadow">
                            {open ? "Ver menos" : "Ver más"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Service = ({name, image}) => {
    return (
        <div className="col-span-6 md:col-span-3 rounded transition duration-150 hover:bg-blue-100 bg-gray-100 grid grid-rows-4 grid-flow-col shadow-xl p-4 h-40 mx-2 my-4">
            <div className="w-full mt-3">
                <h5 className="font-bold text-lg">{name}</h5>
            </div>
            <div className="w-full row-start-4">
                <img alt="svgImg" className="h-8 w-8"
                     height={15}
                     width={15}
                     src={image}/>
            </div>
        </div>
    )
}