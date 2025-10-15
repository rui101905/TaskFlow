import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TaskListView = ({ tasks, deleteTask }) => {
  const navigate = useNavigate();

  const getPriorityVariant = (priority) => {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'secondary';
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'task-priority-high';
      case 'medium':
        return 'task-priority-medium';
      case 'low':
        return 'task-priority-low';
      default:
        return '';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId);
    }
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h2>Task List</h2>
            <Button 
              variant="primary" 
              onClick={() => navigate('/add')}
            >
              Add New Task
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          {tasks.length === 0 ? (
            <Alert variant="info" className="text-center">
              <Alert.Heading>No Tasks Yet!</Alert.Heading>
              <p>You haven't created any tasks yet. Click the "Add New Task" button to get started.</p>
            </Alert>
          ) : (
            <Row>
              {tasks.map((task) => (
                <Col key={task.id} md={6} lg={4} className="mb-3">
                  <Card className={`task-card ${getPriorityClass(task.priority)}`}>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                      <Badge bg={getPriorityVariant(task.priority)}>
                        {task.priority.toUpperCase()}
                      </Badge>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        Delete
                      </Button>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{task.title}</Card.Title>
                      {task.description && (
                        <Card.Text className="text-muted">
                          {task.description}
                        </Card.Text>
                      )}
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <small>Created: {formatDate(task.createdAt)}</small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TaskListView;
