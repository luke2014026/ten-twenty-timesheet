import { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import '../styles/AddEntryModal.css';

interface AddEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  onSubmit: (entry: {
    taskName: string;
    projectName: string;
    hours: number;
    date: string;
  }) => void;
}

const AddEntryModal = ({ isOpen, onClose, date, onSubmit }: AddEntryModalProps) => {
  const [project, setProject] = useState('');
  const [workType, setWorkType] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState(1.5);

  useEffect(() => {
    if (isOpen) {
      setProject('');
      setWorkType('');
      setDescription('');
      setHours(1.5);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!project || !workType || !description) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    onSubmit({
      taskName: description,
      projectName: project,
      hours,
      date,
    });

    toast({
      title: 'Success',
      description: 'Entry added successfully',
    });

    onClose();
  };

  const incrementHours = () => {
    setHours(prev => Math.min(prev + 0.5, 24));
  };

  const decrementHours = () => {
    setHours(prev => Math.max(prev - 0.5, 0));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Add New Entry</h2>
          <button className="modal-close" onClick={onClose}>
            <X className="close-icon" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label className="form-label">
              Select Project <span className="required">*</span>
            </label>
            <select
              className="form-select"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            >
              <option value="">Project Name</option>
              <option value="homepage">Homepage Development</option>
              <option value="dashboard">Dashboard Design</option>
              <option value="api">API Integration</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Type of Work <span className="required">*</span>
            </label>
            <select
              className="form-select"
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
              required
            >
              <option value="">Bug Fixes</option>
              <option value="development">Development</option>
              <option value="testing">Testing</option>
              <option value="design">Design</option>
              <option value="bugfix">Bug Fixes</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Task description <span className="required">*</span>
            </label>
            <textarea
              className="form-textarea"
              placeholder="Write text here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
            />
            <span className="char-count">0 / 200 characters</span>
          </div>

          <div className="form-group">
            <label className="form-label">
              Hours <span className="required">*</span>
            </label>
            <div className="hours-input">
              <button
                type="button"
                className="hours-button"
                onClick={decrementHours}
              >
                <Minus className="hours-icon" />
              </button>
              <input
                type="number"
                className="hours-value"
                value={hours}
                onChange={(e) => setHours(parseFloat(e.target.value) || 0)}
                step="0.5"
                min="0"
                max="24"
                required
              />
              <button
                type="button"
                className="hours-button"
                onClick={incrementHours}
              >
                <Plus className="hours-icon" />
              </button>
            </div>
          </div>

          <div className="modal-footer">
            <button type="submit" className="submit-button">
              Add entry
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;
