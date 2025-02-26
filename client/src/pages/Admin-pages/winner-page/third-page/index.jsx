import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  collegeList,
  gradeOptions,
  groupwinnerResultThirdInitialFormData,
  winnerResultThirdInitialFormData,
} from "@/config";
import { AdminContext } from "@/context/admin-context";
import { Trash2Icon } from "lucide-react";
import { useContext } from "react";

function ThirdWinnerPage() {
  const {
    thirdWinnerFormData,
    setThirdWinnerFormData,
    isGroupToggled,
    isSharedGroupToggled,
    setIsSharedGroupToggled,
  } = useContext(AdminContext);

  function handleNewStudents() {
    const newStudent = {
      ...winnerResultThirdInitialFormData[0],
      members: [],
    };
    setThirdWinnerFormData([...thirdWinnerFormData, newStudent]);
  }

  function handleAddGroupMembers(studentIndex) {
    const updatedStudents = [...thirdWinnerFormData];
    updatedStudents[studentIndex].members = [
      ...updatedStudents[studentIndex].members,
      { memberName: "" },
    ];
    setThirdWinnerFormData(updatedStudents);
  }

  function handleStudentNameChange(event, studentIndex) {
    const updatedStudents = [...thirdWinnerFormData];
    updatedStudents[studentIndex].studentName = event.target.value;
    setThirdWinnerFormData(updatedStudents);
  }

  function handleStudentCodeChange(event, studentIndex) {
    const updatedStudents = [...thirdWinnerFormData];
    updatedStudents[studentIndex].studentCode = event.target.value;
    setThirdWinnerFormData(updatedStudents);
  }

  function handleGroupMemberNameChange(event, studentIndex, memberIndex) {
    const updatedStudents = [...thirdWinnerFormData];
    updatedStudents[studentIndex].members[memberIndex].memberName =
      event.target.value;
    setThirdWinnerFormData(updatedStudents);
  }

  function handlePointChange(event, studentIndex) {
    const updatedStudents = [...thirdWinnerFormData];
    updatedStudents[studentIndex].points = event.target.value;
    setThirdWinnerFormData(updatedStudents);
  }

  function handleCollegeNameChange(value, studentIndex) {
    const updatedStudents = [...thirdWinnerFormData];
    updatedStudents[studentIndex].collegeName = value;
    setThirdWinnerFormData(updatedStudents);
  }

  function handleGradeChange(value, studentIndex) {
    const updatedStudents = [...thirdWinnerFormData];
    updatedStudents[studentIndex].grade = value;
    setThirdWinnerFormData(updatedStudents);
  }

  function handleDeleteStudent(studentIndex) {
    setThirdWinnerFormData((prevData) =>
      prevData.filter((_, i) => i !== studentIndex)
    );
  }

  function handleDeleteMember(studentIndex, memberIndex) {
    const updatedStudents = [...thirdWinnerFormData];
    updatedStudents[studentIndex].members = updatedStudents[
      studentIndex
    ].members.filter((_, i) => i !== memberIndex);
    setThirdWinnerFormData(updatedStudents);
  }

  function handleGroupSwitchToggle(value) {
    setIsSharedGroupToggled(value);
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <Button onClick={handleNewStudents}>Add Students</Button>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-subHeading text-2xl">Third Prize</h2>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex items-center space-x-2">
            <Switch
              checked={isSharedGroupToggled}
              id="group-mode"
              onCheckedChange={(value) => handleGroupSwitchToggle(value)}
            />
            <Label htmlFor="group-mode">Group Item</Label>
          </div>
        </div>
      </CardHeader>
      {thirdWinnerFormData.map((item, studentIndex) => (
        <CardContent key={studentIndex} className="border-b">
          {studentIndex > 0 ? (
            <div className="mt-2">
              <Trash2Icon
                color="red"
                size={30}
                className="cursor-pointer"
                onClick={() => handleDeleteStudent(studentIndex)}
              />
            </div>
          ) : null}
          <div className="flex justify-center mb-2">
            <h1> Student {studentIndex + 1} </h1>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Label>Student Name</Label>
              <Input
                type="text"
                placeholder="Enter student name..."
                value={item.studentName}
                onChange={(event) =>
                  handleStudentNameChange(event, studentIndex)
                }
              />
            </div>
            <div>
              <Label>Student Code</Label>
              <Input
                type="text"
                placeholder="Enter student code..."
                value={item.studentCode}
                onChange={(event) =>
                  handleStudentCodeChange(event, studentIndex)
                }
              />
            </div>
            <div>
              <Label>College Name</Label>
              <Select
                onValueChange={(value) =>
                  handleCollegeNameChange(value, studentIndex)
                }
                value={item.collegeName}
              >
                <SelectTrigger
                  className={`${isGroupToggled ? "bg-gray-300" : ""}`}
                >
                  <SelectValue placeholder="College Name" />
                </SelectTrigger>
                <SelectContent>
                  {collegeList.map((college) => (
                    <SelectItem key={college.id} value={college.label}>
                      {college.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Grade</Label>
              <Select
                onValueChange={(value) =>
                  handleGradeChange(value, studentIndex)
                }
                value={item.grade}
              >
                <SelectTrigger
                  className={`${isGroupToggled ? "bg-gray-300" : ""}`}
                >
                  <SelectValue placeholder="Grade Point" />
                </SelectTrigger>
                <SelectContent>
                  {gradeOptions.map((grade) => (
                    <SelectItem key={grade.id} value={grade.label}>
                      {grade.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Point</Label>
              <Input
                type="number"
                placeholder="Enter point..."
                value={item.points}
                onChange={(event) => handlePointChange(event, studentIndex)}
              />
            </div>
            {isSharedGroupToggled && (
              <div className="w-full flex justify-center items-center">
                <Button
                  onClick={() => handleAddGroupMembers(studentIndex)}
                  className="w-full cursor-pointer"
                >
                  Add Group Members
                </Button>
              </div>
            )}
            {isSharedGroupToggled &&
              item.members &&
              item.members.length > 0 &&
              item.members.map((member, memberIndex) => (
                <div key={memberIndex}>
                  <div className="w-full">
                    <Label>Member Name</Label>
                    <div className="flex gap-2 justify-center items-center">
                      <Input
                        type="text"
                        placeholder="Enter member name..."
                        value={member.memberName}
                        onChange={(event) =>
                          handleGroupMemberNameChange(
                            event,
                            studentIndex,
                            memberIndex
                          )
                        }
                      />
                      <Trash2Icon
                        color="red"
                        size={30}
                        className="cursor-pointer"
                        onClick={() =>
                          handleDeleteMember(studentIndex, memberIndex)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      ))}
    </Card>
  );
}

export default ThirdWinnerPage;
