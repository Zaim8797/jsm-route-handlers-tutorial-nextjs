interface ProjectNameProps {
    params: { name: string };
  }
  
  export default function ProjectName({ params }: ProjectNameProps) {
    return (
      <main>
        <h1>Project {params.name}</h1>
      </main>
    );
  }
  