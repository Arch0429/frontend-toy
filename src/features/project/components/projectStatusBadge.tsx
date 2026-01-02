import type { Project} from '../types';
import { PROJECT_STATUS_LABEL } from '../../../shared/constants/projectStatus';

interface Props {
    status: Project['status'];
}

export function ProjectStatusBadge({ status }: Props) {
    return (
        <span>
            {PROJECT_STATUS_LABEL[status]}
        </span>
    );
}