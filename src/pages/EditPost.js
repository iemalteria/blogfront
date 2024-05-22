import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from "react-router-dom";

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

export default function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [cover, setCover] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch(`https://iemalteria-back.vercel.app/post/${id}`)
            .then(response => response.json())
            .then(postInfo => {
                setTitle(postInfo.title);
                setSummary(postInfo.summary);
                setContent(postInfo.content);
            })
            .catch(error => console.error('Error fetching post:', error));

        // Cleanup function to avoid memory leaks
        return () => {
            setTitle('');
            setSummary('');
            setContent('');
            setFiles('');
            setCover('');
            setRedirect(false);
        };
    }, [id]); // Dependencia vacía para ejecutar solo una vez al cargar el componente

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files[0]);
        }
        try {
            const response = await fetch('https://iemalteria-back.vercel.app/post', {
                method: 'PUT',
                body: data,
                credentials: 'include',
            });
            if (response.ok) {
                setRedirect(true);
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }
    
    if (redirect) {
        return <Navigate to={`/post/${id}`} />;
    }

    return (
        <form onSubmit={updatePost} className="new-post">
            <h1 className="create-title">Editar Publicación</h1>
            <input 
                type="text" 
                placeholder="Título" 
                value={title} 
                onChange={ev => setTitle(ev.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Resumen" 
                value={summary} 
                onChange={ev => setSummary(ev.target.value)} 
            />
            <input 
                type="file" 
                onChange={ev => setFiles(ev.target.files)} 
            />
            <ReactQuill 
                value={content} 
                modules={modules} 
                formats={formats} 
                onChange={newValue => setContent(newValue)} 
            />
            <button style={{marginTop:'10px'}}>Actualizar Publicación</button>
        </form>
    );
}
