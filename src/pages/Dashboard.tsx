
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import UserInput from '@/components/UserInput';
import Sidebar from '@/components/Sidebar';
import PreviewGrid from '@/components/PreviewGrid';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export default function Dashboard(){
  const [username, setUsername] = useState('Mayur-Pagote');
  const [selectedCategory, setSelectedCategory] = useState('graphs');
  const navigate = useNavigate();

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleBackToHome}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home        </Button>
        <ModeToggle />
      </div>
      <Header />
      <UserInput 
        onUsernameChange={handleUsernameChange}
        defaultUsername="Mayur-Pagote"
      />
      <div className="flex flex-1">
        <Sidebar 
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <PreviewGrid 
          selectedCategory={selectedCategory}
          username={username}
        />
      </div>
    </div>
  );
};
