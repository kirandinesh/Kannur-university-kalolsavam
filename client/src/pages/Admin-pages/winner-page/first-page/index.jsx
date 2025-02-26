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
  groupwinnerResultFirstInitialFormData,
  winnerResultFirstInitialFormData,
} from "@/config";
import { AdminContext } from "@/context/admin-context";

import { Trash2Icon } from "lucide-react";
import { useContext } from "react";

function FirstWinnerPage() {
  const {
    isGroupToggled,
    winnerFirstFormData,
    setWinnerFirstFormData,
    isSharedGroupToggled,
    setIsSharedGroupToggled,
  } = useContext(AdminContext);

  function handleNewStudents() {
    const newStudent = {
      ...winnerResultFirstInitialFormData[0],
      members: [],
    };
    setWinnerFirstFormData([...winnerFirstFormData, newStudent]);
  }

  function handleAddGroupMembers(index) {
    const updatedStudents = [...winnerFirstFormData];
    updatedStudents[index].members = [
      ...updatedStudents[index].members,
      { memberName: "" },
    ];
    setWinnerFirstFormData(updatedStudents);
  }

  function handleStudentNameChange(event, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      studentName: event.target.value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  function handleStudentCodeChange(event, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      studentCode: event.target.value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  function handleGroupMemberNameChange(event, studentIndex, memberIndex) {
    const updatedStudents = [...winnerFirstFormData];
    updatedStudents[studentIndex].members[memberIndex].memberName =
      event.target.value;
    setWinnerFirstFormData(updatedStudents);
  }

  function handlePointChange(event, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      points: event.target.value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  function handleCollegeNameChange(value, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      collegeName: value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  function handleGradeChange(value, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      grade: value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  function handleDeleteStudent(index) {
    setWinnerFirstFormData((prevData) =>
      prevData.filter((_, i) => i !== index)
    );
  }

  function handleDeleteMember(studentIndex, memberIndex) {
    const updatedStudents = [...winnerFirstFormData];
    updatedStudents[studentIndex].members = updatedStudents[
      studentIndex
    ].members.filter((_, i) => i !== memberIndex);
    setWinnerFirstFormData(updatedStudents);
  }

  function handleGroupSwitchToggle(value) {
    setIsSharedGroupToggled(value);
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <Button onClick={handleNewStudents}>Add Students</Button>{" "}
        </div>
        <div className="flex  justify-center items-center">
          <h2 className="font-subHeading text-2xl">First Prize</h2>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex items-center  space-x-2">
            <Switch
              checked={isSharedGroupToggled}
              id="group-mode"
              onCheckedChange={(value) => handleGroupSwitchToggle(value)}
            />
            <Label htmlFor="group-mode">Group Item</Label>
          </div>
        </div>
      </CardHeader>
      {winnerFirstFormData.map((item, studentIndex) => (
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
                name={`student-${studentIndex + 1}`}
                value={winnerFirstFormData[studentIndex]?.studentName}
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
                name={`student-${studentIndex + 1}`}
                value={winnerFirstFormData[studentIndex]?.studentCode}
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
                value={winnerFirstFormData[studentIndex]?.collegeName}
              >
                <SelectTrigger
                  className={`${isGroupToggled ? "bg-gray-300" : ""}`}
                >
                  <SelectValue placeholder="College Name" />
                </SelectTrigger>
                <SelectContent className="text-ellipsis overflow-hidden max-w-3xs  sm:max-w-lg">
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
                value={winnerFirstFormData[studentIndex]?.grade}
              >
                <SelectTrigger
                  className={`${isGroupToggled ? "bg-gray-300" : ""}`}
                >
                  <SelectValue placeholder="Grade Point" />
                </SelectTrigger>
                <SelectContent className="text-ellipsis overflow-hidden max-w-3xs  sm:max-w-lg">
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
                onWheel={(e) => e.target.blur()}
                type="number"
                placeholder="Enter point..."
                name={`point-${studentIndex + 1}`}
                value={winnerFirstFormData[studentIndex]?.points}
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
              winnerFirstFormData[studentIndex].members &&
              winnerFirstFormData[studentIndex].members.length > 0 &&
              winnerFirstFormData[studentIndex].members.map(
                (group, memberIndex) => (
                  <div key={memberIndex}>
                    <div className="w-full">
                      <Label>Member Name</Label>
                      <div className="flex gap-2 justify-center items-center">
                        <Input
                          type="text"
                          placeholder="Enter Members name..."
                          name={`member-${memberIndex + 1}`}
                          value={group.memberName}
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
                )
              )}
          </div>
        </CardContent>
      ))}
    </Card>
  );
}

export default FirstWinnerPage;
